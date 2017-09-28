var x = [];
var y = [];
var dx = [];
var dy = [];
var N, i;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	N = 3000;
	for (i=0; i<N; i++) {
		x[i] = random(0,windowWidth);
		y[i] = random(0,windowHeight);
	}
}

function draw() {
	background(0);
		for (i=0; i<N; i++) {
			dx[i] = mouseX - x[i];
			dy[i] = mouseY - y[i];
			x[i] -= dx[i] * 0.03;
			y[i] -= dy[i] * 0.03;
			x[i] = x[i] + random(-5,5);
			y[i] = y[i] + random(-5,5);
			var size = 0.11*sqrt(sq(dx[i])+sq(dy[i]));
			fill(255,255,255,random(1,70));
			noStroke();
			ellipse(x[i], y[i], size, size);

			if(x[i]<0) {
				x[i]=mouseX + random(-100,100);
				y[i]=mouseY + random(-100,100);
			}
			if(y[i]<0) {
				x[i]=mouseX + random(-100,100);
				y[i]=mouseY + random(-100,100);
			}
			if(x[i]>=width) {
				x[i]=mouseX + random(-100,100);
				y[i]=mouseY + random(-100,100);
			}
			if(y[i]>=height) {
				x[i]=mouseX + random(-100,100);
				y[i]=mouseY + random(-100,100);
			}
		}
}
