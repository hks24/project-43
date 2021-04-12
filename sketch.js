var hr;
var min; 
var sec;
var hrAngle, minAngle, scAngle; 

function setup() {
  createCanvas(800,400);
    
  angleMode(DEGREES); 
}

function draw() {
  background(255,255,255); 

  
  //Translation and rotation 
  translate(200,200)
  rotate(-90)

  hr = hour();
  sec = second();
  min = minute();

  scAngle = map(sec,0,60,0,360);
  hrAngle = map(hr%12,0,60,0,360);
  minAngle = map(min,0,60,0,360);


  push();
  rotate(scAngle)
  strokeWeight(10);
  stroke("red");
  fill("red");
  line(0,0,100,0);
  pop();

  push();
  rotate(hrAngle)
  strokeWeight(10);
  stroke("blue");
  fill("blue");
  line(0,0,70,0);
  pop();

  
  push();
  rotate(minAngle)
  strokeWeight(10);
  stroke("green");
  fill("green");
  line(0,0,85,0);
  pop();
  
  stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,minAngle);
    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);

  
}