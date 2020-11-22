let pointLightEnable = false; 
  
function preload() { 
} 
  
function setup() { 
  createCanvas(600, 300, WEBGL); 
  
  graySlider = createSlider(0, 128, 64, 1); 
  graySlider.position(20, 50); 
  
  pointLightCheck = createCheckbox( 
        "Punto de luz", false); 
  
  pointLightCheck.position(20, 80); 
  pointLightCheck.changed(() => { 
    pointLightEnable = !pointLightEnable; 
  }); 
} 
  
function draw() { 
  background("white"); 

  noStroke(); 
  shininess(15); 
  if (pointLightEnable) { 
    pointLight(255, 0, 0, -width / 2, 
                    -height / 2, 250); 
  } 
  
  grayValue = graySlider.value(); 
  ambientLight(grayValue); 
  specularMaterial(250); 
  sphere(100); 
} 