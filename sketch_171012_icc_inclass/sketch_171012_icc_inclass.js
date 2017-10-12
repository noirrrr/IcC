var v = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  background(0);
}

function keyPressed() {
  if (v === 0) {
    v = 255;
  } else {
    v = 0;
  }
}

function draw() { 
  background(0); 
  randomSeed(0);

  var x, y;
  var dense = map(mouseX, 0, windowWidth, 10, 100);
  var trans = map(mouseY, 0, windowHeight, 0, 70);
  for (y=0; y<windowHeight; y+=dense) { 
    for (x=0; x<windowWidth; x+=dense) {
      var r = random(0, 1); 
      if (r < 0.25) {
        strokeWeight(2);
        stroke(255, 255, 255, 1*trans);
        fill(0, 0, 255, 0);
        
      } else if (r >= 0.25 && r < 0.5) {
        strokeWeight(2);
        stroke(255, 255, 255, 2*trans);
        fill(0, 0, 255, trans);
        
      } else if (r >= 0.5 && r < 0.75) {
        strokeWeight(2);
        stroke(255, 255, 255, 3*trans);
        fill(0, 0, 255, 2*trans);
        
      } else {
        strokeWeight(2);
        stroke(255, 255, 255, 4*trans);
        fill(0, 0, 255, 4*trans);
      }
      if (v == 255) {
        rect(x-dense/2, y-dense/2, dense, dense);
      } else {
        ellipse(x, y, dense, dense);
      }
    }
  }
}
