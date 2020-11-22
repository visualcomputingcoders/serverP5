const W = 800;
const H = 600;
const S = 50;

const map = [];

function setup() {
  for(var y = 0; y < (H/S); y++) {
    var line = [];
    for(var x = 0; x < (W/S); x++) {
      line.push((round(random(100,999)) % 2) == 0?true:false);
    }
    map.push(line);
  }
  
  createCanvas(W, H, WEBGL);
}

function draw() {
  background(0);
  camera(0, 0, 500, 0, 0, 0, 0, -1, 0);

  //ambientLight(60, 60, 60);
  pointLight(255, 255, 255, 0, 0, 0);
  spotLight(255,255,255, 0,0,1000, 0,0,-1, 90)
  
  for(var y = 0; y < (H/S); y++) {
    for(var x = 0; x < (W/S); x++) {
      if (map[y][x]) {
        push();
        ambientMaterial(250);
        noStroke();
        translate((x * S) - (W / 2),(y * S) - (H / 2), 0);
        box(S);
        pop();
      }
    }
  }
}