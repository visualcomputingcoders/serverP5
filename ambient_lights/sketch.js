let pointLightEnable = false; 
  
function preload() { 
} 
  
function setup() { 
  createCanvas(600, 300, WEBGL); 
  
  graySlider = createSlider(0, 128, 64, 1); 
  graySlider.position(20, 50); 
  
  pointLightCheck = createCheckbox( 
        "Enable Point Light", false); 
  
  pointLightCheck.position(20, 80); 
  
  // Toggle point light 
  pointLightCheck.changed(() => { 
    pointLightEnable = !pointLightEnable; 
  }); 
} 
  
function draw() { 
  background("green"); 
  text("Move the slider to change the ambient"
      + " light's gray value.", -285, -125); 
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