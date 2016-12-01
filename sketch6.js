var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var song;

var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var y5 = 0;
var y6 = 0;
var y7 = 0;
var y8 = 0;

var y1s = 0;
var y2s = 0;
var y3s = 0;
var y4s = 0;
var y5s = 0;
var y6s = 0;
var y7s = 0;
var y8s = 0;

var num = 60;
var x = [];
var z = [];


function preload() {
  song = loadSound("nmh.mp3");
  img = loadImage("background.png");
  img2 = loadImage("wolfman.png");
  img3 = loadImage("firelady.png");
  img4 = loadImage("legs.png");
  img5 = loadImage("sombrero.png");
  img6 = loadImage("mandolin.png");
  img7 = loadImage("paper.png");
  img8 = loadImage("light.png");
  img9 = loadImage("Talram_Crystal.png")
}

function setup() {
  createCanvas(800, 875);
  noCursor();
  song.loop();
  for (var i = 0; i < num; i++) {
    x[i] = 0;
    z[i] = 0;
  }
  y1s = random(0, 10);
  y2s = random(0, 10);
  y3s = random(0, 10);
  y4s = random(0, 10);
  y5s = random(0, 10);
  y6s = random(0, 10);
  y7s = random(0, 10);
  y8s = random(0, 10);

  textSize(32);
  text("there is music that sounds from the streets", 10, 30);
  fill(0, 102, 153);

}

function draw() {
  image(img, 0, 0, 800, 800);
  image(img3, 50, 430, 300, 300);
  image(img4, 505, 450, 220, 330);
  image(img2, 500, 350, 250, 250);
  image(img5, 580, 345, 90, 50);
  image(img6, 400, 530, 150, 150);
  image(img7, 0, 130, 800, 750);
  image(img8, 400, 0, 200, 200);

  for (var i = num-1; i > 0; i--) {
    x[i] = x[i-10];
    z[i] = z[i-10];
  }
  x[0] = mouseX;
  z[0] = mouseY;
  for (var i = 0; i < num; i++) {
    image(img9, x[i], z[i], 20, 35);
  }



  y1 = y1 + 1 * y1s;
  y2 = y2 + 1 * y2s;
  y3 = y3 + 1 * y3s;
  y4 = y4 + 1 * y4s;
  y5 = y5 + 1 * y5s;
  y6 = y6 + 1 * y6s;
  y7 = y7 + 1 * y7s;
  y8 = y8 + 1 * y8s;

  if(y1 > height) {
    y1 = 0;
  }

  if(y2 > height) {
    y2 = 0;
  }

  if(y3 > height) {
    y3 = 0;
  }

  if(y4 > height) {
    y4 = 0;
  }

  if(y5 > height) {
    y5 = 0;
  }

  if(y6 > height) {
    y6 = 0;
  }

  if(y7 > height) {
    y7 = 0;
  }

  if(y8 > height) {
    y8 = 0;
  }

  image(img9, 200, y1, 70, 100);
  image(img9, 300, y2, 40, 80);
  image(img9, 60, y3, 100, 230);
  image(img9, 500, y4, 40, 80);
  image(img9, 510, y5, 40, 80);
  image(img9, 20, y6, 25, 40);
  image(img9, 75, y7, 15, 30);
  image(img9, 95, y8, 15, 30);
}
