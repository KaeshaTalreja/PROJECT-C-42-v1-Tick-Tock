var hr,min,sec;
var secAngle,hrAngle,minAngle;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  push();
  translate(200,200);
  rotate(-90);
  
  hr=hour();
  min=minute();
  sec=second();
  
  secAngle=map(sec,0,60,0,360);
  hrAngle=map(hr %12,0,12,0,360);
  minAngle=map(min,0,60,0,360);
  
  //draw the seconds hand
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(6);
  line(0,0,100,0);
  pop();
  noFill();
  strokeWeight(6);
  stroke(255,0,0);
  arc(0,0,260,260,0,secAngle)
  
  //draw the hour hand
  push();
  rotate(hrAngle);
  stroke(0,255,0);
  strokeWeight(6);
  line(0,0,70,0);
  pop();
  noFill();
  strokeWeight(6);
  stroke(0,255,0);
  arc(0,0,300,300,0,hrAngle)
  
  //draw the minutes hand
  push();
  rotate(minAngle);
  stroke(0,0,255);
  strokeWeight(6);
  line(0,0,85,0);
  pop();
  noFill();
  strokeWeight(6);
  stroke(0,0,255);
  arc(0,0,280,280,0,minAngle)
  pop();
  
  textSize(20);
  fill("aqua");
  text(hr+":"+min+":"+sec,170,370);
}