class Particle {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.color = color(random(0,255),random(0,255),random(0,255))
      this.radius = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle

      push()
      translate(pos.x,pos.y)
      rotate(angle)

      noStroke()
     fill(this.color);
      ellipseMode(RADIUS);
      
      ellipse(0, 0, this.r,this.r);
      pop()
    }
  };