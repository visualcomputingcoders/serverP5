function setup() {
  createCanvas(500, 500, WEBGL);
  noStroke();
}
function draw() {
  background(0);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  translate(-25, 0, 0);
  lightFalloff(1, 0, 0);
  pointLight(250, 250, 250, locX, locY, 250);
  sphere(20);
  translate(50, 0, 0);
  lightFalloff(0.9, 0.01, 0);
  pointLight(250, 250, 250, locX, locY, 250);
  sphere(100);
}