let mm1;
let mm2;
let bt1;
let bt2;
let btPause;

function preload() {
  soundFormats("mp3", "ogg");
  mm1 = loadSound("sample.mp3");
  mm2 = loadSound("sample2.mp3");
}

function setup() {
  createCanvas(640, 640);
  bt1 = createButton("PLAY1");
  bt1.mousePressed(playMusic);
  bt2 = createButton("PLAY2");
  bt2.mousePressed(playMusic2);
}

function draw() {
  background(220);
}

function playMusic() {
  if (!mm1.isPlaying()) {
    mm1.play();
    bt1.html("STOP1");
  } else {
    mm1.stop();
    bt1.html("PLAY1");
  }
}

function playMusic2() {
  if (!mm2.isPlaying()) {
    mm2.play();
    bt2.html("STOP2");
  } else {
    mm2.stop();
    bt2.html("PLAY2");
  }
}
