var waveList = [];
var tracUrls = [
    'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
    'https://api.soundcloud.com/tracks/170230915/stream?client_id=8f474de4d1dedd5a6a4f4cbb60f4e6b8',
    'https://api.soundcloud.com/tracks/188204240/stream?client_id=8f474de4d1dedd5a6a4f4cbb60f4e6b8'
];

for(var t in tracUrls) {
    createWavesurfer(tracUrls[t], t);
}

function createWavesurfer(link, index) {
    waveList.push(Object.create(WaveSurfer));

    // sound wave 설정
    var options = {
        container : document.querySelector('#waveform_'+ index),
        waveColor: '#d32f2f',
        progressColor: 'gray',
        barWidth : 0.5,
        cursorColor : '#black'
    };

    waveList[index].init(options);

    // 트랙 설정
    waveList[index].load(link);

    // sound wave 클릭 시 전체 모두 같이 이동하게
    waveList[index].drawer.on('click', function(event, progress) {
        for(var i =0; i<tracUrls.length; i++) {
            waveList[i].seekTo(progress);
        }
    });
}

var slider = document.querySelector('#slider');

// 줌
slider.oninput = function () {
    var zoomLevel = Number(slider.value);
    for(var i in waveList) {
        waveList[i].zoom(zoomLevel);
        // wavesurfer.zoom(zoomLevel);
    }
};

function playMultiple(){
    waveList.forEach(element => {
        element.playPause();
    });
}
