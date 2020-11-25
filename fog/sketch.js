let img;

function preload() {
  img = loadImage('assets/sax.png');
}

function setup() {
  createCanvas(700, 700);
  pixelDensity(1);
  img.loadPixels();
  loadPixels();
  rSlider = createSlider(0, 255, 200);
  rSlider.position(20, 550);
}

function draw() {
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let loc = (x + y * img.width) * 4;
      
      let r, g, b;
      r = img.pixels[loc];
      g = img.pixels[loc+1];
      b = img.pixels[loc+2];
      let maxdist = 50;
      let d = dist(x, y, mouseX, mouseY);
      let adjustbrightness = (rSlider.value() * (maxdist - d)) / maxdist;
      
      r += adjustbrightness;
      g += adjustbrightness;
      b += adjustbrightness;
      r = constrain(r, 0, 255);
      g = constrain(g, 0, 255);
      b = constrain(b, 0, 255);
      // Make a new color and set pixel in the window
      let c = color(r, g, b);
      let pixloc = (y * width + x) * 4;
      pixels[pixloc] = r;
      pixels[pixloc + 1] = g;
      pixels[pixloc + 2] = b;
      pixels[pixloc + 3] = 255;
    }
  }
  updatePixels();
}
