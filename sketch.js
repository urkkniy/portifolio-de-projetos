
function setup() {

    createCanvas(600, 600);
  
    background("black");
  
  }
  
  function draw() {
  
    stroke("pink");
  
    fill("purple");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
  
      rect(mouseX, mouseY, 35, 35);
  
    }
  
  }
