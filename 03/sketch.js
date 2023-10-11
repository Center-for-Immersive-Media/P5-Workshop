////////////////////////////////////////////////////////////
//
//  Lesson 03 - Image Buffer
//
////////////////////////////////////////////////////////////

let size = 800;
let speed = 2;
let position1, position2;
let falling = true;

// This function runs once when the sketch starts up
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);
  fill(75, 22, 131);
  rectMode(RADIUS);
  strokeWeight(0);
  position1 = [windowWidth + size / 2, windowHeight / 2, size, size];
  position2 = [windowWidth / 2, 0 - size / 2, size, size];
}

// This function runs continuously, forever
function draw() {
  clear();
  background(255, 204, 0);
  if (position1[0] <= -size / 2) {
    position1[0] = windowWidth + size / 2;
  } else {
    position1[0] = position1[0] - speed;
  }
  ellipse(...position1);

  push();
  fill(0, 0, 0, 0);
  stroke(255, 255, 255);
  strokeWeight(4);
  if (falling) {
    position2[1] = position2[1] + speed;
    if (position2[1] > windowHeight + size / 2) {
      falling = false;
    }
  } else {
    position2[1] = position2[1] - speed;
    if (position2[1] < 0) {
      falling = true;
    }
  }
  ellipse(...position2);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
