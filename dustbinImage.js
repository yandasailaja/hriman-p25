class DustbinImage {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
     this.image=loadImage("dustbin.png");
     //this.body.scale = 0.5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("yellow");
  
      fill("red");
      rect(0, 0, this.width, this.height);
    
       imageMode(CENTER);
      image(this.image,0,0);
      
      this.image.scale = 0.5;
      pop();
    }
  };