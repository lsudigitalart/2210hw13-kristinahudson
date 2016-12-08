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

var time1 = 10000
var time2 = 12000
var time3 = 14000
var time4 = 18000
var time5 = 20000
var time6 = 22000
var time7 = 26000
var time8 = 29000
var time9 = 42000
var time10 = 44000
var time11 = 51000
var time12 = 53000
var time13 = 55000
var time14 = 59000
var time15 = 61000


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



}

function draw() {

  image(img, 0, 0, 1000, 800);
  image(img3, 50, 430, 300, 300);
  image(img4, 505, 450, 220, 330);
  image(img2, 500, 350, 250, 250);
  image(img5, 580, 345, 90, 50);
  image(img6, 400, 530, 150, 150);
  image(img7, 0, 130, 800, 750);
  image(img8, 400, 0, 200, 200);

  var currenttime = millis();
  if (currenttime > time1) {
    fill(170);
    textSize(20)
    text("what a beautiful face", 20, 50)
  } if (currenttime > time2) {
    fill(175);
    textSize(20)
    text("i have found in this place", 20, 70)
  } if (currenttime > time3) {
    fill(180);
    textSize(20)
    text("that is circling all round the sun", 20, 90)
  } if (currenttime > time4) {
    fill(185);
    textSize(20)
    text("What a beautiful dream", 20, 110)
  } if (currenttime > time5) {
    fill(190);
    textSize(20)
    text("That could flash on the screen", 20, 130)
  } if (currenttime > time6) {
    fill(195);
    textSize(20)
    text("In a blink of an eye and be gone from me", 20, 150)
  } if (currenttime > time7) {
    fill(200);
    textSize(20)
    text("Soft and sweet", 20, 170)
  } if (currenttime > time8) {
    fill(205);
    textSize(20)
    text("Let me hold it close and keep it here with me", 20, 190)
  } if (currenttime > time9) {
    fill(210);
    textSize(20)
    text("And one day we will die", 20, 210)
  } if (currenttime > time10) {
    fill(215);
    textSize(20)
    text("And our ashes will fly from the aeroplane over the sea", 20, 230)
  } if (currenttime > time11) {
    fill(220);
    textSize(20)
    text("But for now we are young", 20, 250)
  } if (currenttime > time12) {
    fill(225);
    textSize(20)
    text("Let us lay in the sun", 20, 270)
  } if (currenttime > time13) {
    fill(230);
    textSize(20)
    text("And count every beautiful thing we can see", 20, 290)
  } if (currenttime > time14) {
    fill(235);
    textSize(20)
    text("Love to be", 20, 310)
  } if (currenttime > time15) {
    fill(240);
    textSize(20)
    text("In the arms of all I'm keeping here with me", 20, 330)
  }

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
