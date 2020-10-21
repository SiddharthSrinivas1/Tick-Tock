var hr;
var min;
var sec;
var end1;
var end2;
var end3;



function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  hr = hour();
  min = minute();
  sec = second ();
  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  end1=map(sec,0,60,0,360);
  arc(0,0,300,300,0,end1);

  

  stroke(150,100,255);
  end2=map(min,0,60,0,360);
  arc(0,0,280,280,0,end2);


  stroke(150,255,100);

  end3=map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end3);
  stroke(150,255,100);
line(0,0,50,0);
pop();


push();
rotate(end2);
stroke(150,100,255);
line(0,0,75,0);
pop();

push();
rotate(end1);
stroke(255,100,150);
line(0,0,100,0);
pop();

stroke(255);
point(0,0);



  drawSprites();
}