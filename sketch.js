//nameSpacing

const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var engine,world;

var  particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300

var ground


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,795,800,10)
  for (var k = 0; k <=width ; k = + 80) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
    
  }
  
  for (var j = 40; j <=width; j = j+50) {
   plinkos.push(new Plinko(j,75))
  }

  for (var j = 14; j <=width-10; j = j+50) {
    plinkos.push(new Plinko(j,175))
   }
}

function draw() {
  background(0);  
  Engine.update(engine);

   ground.display()
   for (var j = 0  ; j <  particles.length;  j++ ) {
    particles[j].display()
   }
}  