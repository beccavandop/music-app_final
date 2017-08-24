var sourceFile = require('./App')
console.log('LOOK HERE: ', sourceFile.trackName)

var song, analyzer;
function preload() {
  song = loadSound(`${sourceFile.trackName}.mp3`);
}

var mic, fft;
function setup() {
   createCanvas(window.innerWidth,window.innerHeight);
   noFill();
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}
function draw() {
   background(200);
   var spectrum = fft.analyze();
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
}