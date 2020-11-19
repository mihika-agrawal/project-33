var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;
var turn=0;
var gameState = "play";
var divisionHeight=300;
var score =0;
var count= 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",25,600);
 text("500",105,600);
 text("400",185,600);
 text("400",265,600);
 text("200",345,600);
 text("200",425,600);
 text("400",505,600);
 text("400",585,600);
 text("500",665,600);
 text("500",745,600);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
   if(particle!=null){
particle.display();
if(particle.body.position.y> 760){
 
  if(particle.body.position.x< 160){
  
    score= score+500;
    particle= null;
   
    if(count>=5) gameState="end";
  }
  if(particle.body.position.x> 160 && particle.body.position.x<320){
   
    score= score+400;
    particle= null;
   
    if(count>=5) gameState="end";
  }
  if(particle.body.position.x> 320 && particle.body.position.x<480){

    score= score+200;
    particle= null;
    
    if(count>=5) gameState="end";
  }
  if(particle.body.position.x> 480 && particle.body.position.x<560){
    
    score= score+400;
    particle= null;
  
    if(count>=5) gameState="end";
    }
    if(particle.body.position.x> 560 && particle.body.position.x<800){
      score= score+500;
      particle= null;
      
      if(count>=5) gameState="end";
    }
}
 }
   if(gameState=="end"){
     text("Game Over",370,400);
   }

}
function mousePressed(){
  if(gameState!=="end"){
    count++
    particle= new Particle( mouseX,10,10,10);
    
  }
}
/*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/