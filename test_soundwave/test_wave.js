var waveList = [];
var tracUrls = [
    'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
    'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
    'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3',
    'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'
];

for(var t in tracUrls) {
    console.log(t);
    createWavesurfer(tracUrls[t], t);
}

function createWavesurfer(link, index) {
    waveList.push(Object.create(WaveSurfer));

    var options = {
        container : document.querySelector('#waveform_'+ index),
        waveColor: '#d32f2f',
        progressColor: 'gray',
        barWidth : 0.5,
        cursorColor : '#black'
    };

    waveList[index].init(options);
    waveList[index].load(link);

    waveList[index].drawer.on('click', function(event, progress) {
        for(var i =0; i<tracUrls.length; i++) {
            waveList[i].seekTo(progress);
        }
    });
}

var slider = document.querySelector('#slider');
  
slider.oninput = function () {
    var zoomLevel = Number(slider.value);
    for(var i in waveList) {
        waveList[i].zoom(zoomLevel);
        // wavesurfer.zoom(zoomLevel);
    }
};
