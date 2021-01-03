class Plinko {
    constructor(x,y,) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,10,options);
      
      this.radius = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      ellipse(pos.x, pos.y, this.radius);
    }
  };
