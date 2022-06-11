// BUTTERFLY CURVE BUILT FROM EQUATIONS 
// The butterfly curve is an aesthetically pleasing transcendental plane curve and one of my favorite equations to turn into code. 
// MathWorld: https://mathworld.wolfram.com/ButterflyCurve.html
// Wikipedia: https://en.wikipedia.org/wiki/Butterfly_curve_(transcendental)#:~:text=r%20%3D%20(cos%205%CE%B8)2,in%20the%20fall%20of%201991.)

var ink;
var paper;
var e;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB);
  blendMode(LIGHTEST);
  ink = color(13, 13, 13);
  paper = color(252, 255, 252, 225);
  e = 2.71828182845904523536;
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  let torusX = 300;
  let torusY = -40;
  let value = alpha(paper);
  //BACKGROUND GRADIENT CREATED FROM A TORUS
  normalMaterial();
  torus(torusX, torusY * 55);   
  //DRAW THE BUTTERFLY CURVE WITH THE HELP OF A FUNCTION
  stroke(value);
  strokeWeight(1.7);
  noFill();
  rotate(PI);
  for (var i = 0; i < 2; i++) {
    drawButterfly(i);
  }
}

//BUTTERFLY FUNCTION
function drawButterfly(j) {
  push();
  translate(windowWidth/2.05, windowHeight/2.6);
  var da = 0.01; // Rounds out and smoothes curves
  var a = 80; // Constrain x size of curves
  var b = 80; // Constrain y size of curves
  // LOOP THAT DRAWS THE BUTTERFLY CURVES
  beginShape();
  for (var t = 0; t <= 24 * PI; t += da) {
	// PARAMETRIC EQUATIONS
	var r = exp(cos(t)) - 2*cos(4*t) - pow(sin(t/12), 5);
	var x = a * sin(t) * r * j;
	var y = b * cos(t) * r * j;
	vertex(x, y);
  }
  endShape();
  pop();
}

