var durations = [];

var waveList = [];
var tracUrls = [
    'https://api.soundcloud.com/tracks/263199266/stream?client_id=8f474de4d1dedd5a6a4f4cbb60f4e6b8',
    'https://api.soundcloud.com/tracks/170230915/stream?client_id=8f474de4d1dedd5a6a4f4cbb60f4e6b8',
    'https://api.soundcloud.com/tracks/188204240/stream?client_id=8f474de4d1dedd5a6a4f4cbb60f4e6b8'
];

var ctx = new Crunker();

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

for(var t in tracUrls) {
    createWavesurfer(tracUrls[t], t);
    let promise = ctx.fetchAudio(tracUrls[t]);
    promise
    .then(function(val){
        durations.push(val[0].duration);
    })
    .then(function(){
        var slider = document.querySelector('#slider');
        slider.value = 0;

        var minValue = getMinOfArray(durations);
        var maxValue = getMaxOfArray(durations);

        var sliderValue = Number((minValue / maxValue) * 200 / 10);

        slider.value = sliderValue;

        for(var i in waveList) {
            waveList[i].zoom(slider.value);
        }
    });
}

function createWavesurfer(link, index) {
    waveList.push(Object.create(WaveSurfer));
    
    // sound wave 설정
    var options = {
        container : document.querySelector('#waveform_'+ index),
        waveColor: 'blue',
        progressColor: 'gray',
        cursorColor : 'white'
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
slider.oninput = function() {
    var zoomLevel = Number(slider.value);
    for(var i in waveList) {
        waveList[i].zoom(zoomLevel);
    }
};

function playMultiple(){
    var button = document.querySelector('#play-button');

    if(button.src.includes('play.svg'))
        button.src = 'assets\\pause.svg';
    else
        button.src = 'assets\\play.svg';

    waveList.forEach(element => {
        element.playPause();
    });
}
