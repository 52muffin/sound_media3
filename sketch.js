let mm1;
let mm2;
let bt1;
let bt2;
//let btPause;
let img;
let amp;

function preload() {
  soundFormats("mp3", "ogg");
  mm1 = loadSound("sample.mp3");
  mm2 = loadSound("sample2.mp3");
  img = loadImage("score1.png");
}

function setup() {
  createCanvas(640, 640);
  bt1 = createButton("PLAY1");
  bt1.mousePressed(playMusic);
  bt2 = createButton("PLAY2");
  bt2.mousePressed(playMusic2);
  // btPause = createButton("PAUSE");
  // btPause.mousePressed(pauseMusic);
  amp = new p5.Amplitude();
}

function draw() {
  background(220);
  image(img, 320-amp.getLevel()*500, 320-amp.getLevel()*500, amp.getLevel()*1000, amp.getLevel()*1000);
}

function playMusic() {
  if (!mm1.isPlaying()) {
    mm1.play();
    bt1.html("STOP1");
    if (mm2.isPlaying()) {
      mm2.stop();
      bt2.html("PLAY2");
    }
  } else {
    mm1.stop();
    bt1.html("PLAY1");
  }
}

function playMusic2() {
  if (!mm2.isPlaying()) {
    mm2.play();
    bt2.html("STOP2");
    if (mm1.isPlaying()) {
      mm1.stop();
      bt1.html("PLAY1");
    }
  } else {
    mm2.stop();
    bt2.html("PLAY2");
  }
}

// function pauseMusic() {
//   if (mm1.isPlaying()) {
//     mm1.pause();
//     bt1.html("PLAY1");
//   } else if (mm2.isPlaying) {
//     mm2.pause();
//     bt2.html("PLAY2");
//   }
// }
