class BLOCK {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,40,50,options);
      World.add(world, this.body);
    }
    display(color){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(color);
      rect(pos.x, pos.y, 40, 50);
    }
  };
