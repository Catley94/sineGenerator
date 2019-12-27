var wave;
var button;
var slider;
var playing;

function setup() {
    createCanvas(100, 100);
    slider = createSlider(100, 1200, 440);
    wave = new p5.Oscillator();
    wave.setType('sine');
    wave.start();
    wave.amp(0);
    wave.freq(300);
    

    button = createButton('play/pause');
    button.mousePressed(toggle);
    
}

function toggle() {
    if(!playing) {
        wave.amp(0.1, 0.5);
        playing = true;
    } else {
        wave.amp(0, 0.5);
        playing = false;
    }
}

function draw() {
    wave.freq(slider.value());
    if (playing) {
        background(255, 255, 0)
    } else {
        background(51);
    }
}