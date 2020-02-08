// currently P5 library, also Tones.js is available

var wave;
var button;
var slider;
var playing;

var env; 

function setup() {
    createCanvas(100, 100);
    //create envelope object
    env = new p5.Env();
    //set attack, decay, sustain, release times/duration
    env.setADSR(0.05, 0.1, 0.5, 1);
    //set volume of highest to lowest point
    env.setRange(1.2, 0);
    //create slider that ranges from 100 - 1200, defaults at 440
    slider = createSlider(100, 1200, 440);
    //create Oscillator object
    wave = new p5.Oscillator();
    //sine wave type
    wave.setType('sine');
    //start wave
    wave.start();
    //wave volume, use envelope object to control this, otherwise between 0 - 1
    wave.amp(env);
    //frequency of sound, Hz
    wave.freq(300);
    

    button = createButton('play/pause');
    button.mousePressed(toggle);
    
}

function toggle() {

    env.play();
    //if not playing, set volume to 0.1, fade in 0.5 seconds, change "playing" variable, controlling background colour
    //if playing, set volume to 0, 0.5 seconds fade out
    // if(!playing) {
    //     wave.amp(0.1, 0.5);
    //     playing = true;
    // } else {
    //     wave.amp(0, 0.5);
    //     playing = false;
    // }


}

function draw() {
    //slider to control frequency of sound
    wave.freq(slider.value());
    if (playing) {
        background(255, 255, 0)
    } else {
        background(51);
    }
}