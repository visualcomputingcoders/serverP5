function setup() {
  createCanvas(100, 100, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  shininess(20);
  ambientLight(50);
  specularColor(255, 0, 0);
  pointLight(255, 0, 0, 0, -50, 50);
  specularColor(0, 255, 0);
  pointLight(0, 255, 0, 0, 50, 50);
  specularMaterial(255);
  sphere(40);
}