let bubble1;
let bubble2;

function setup(){
  createCanvas(600,400);
  bubble1=new Bubble(200,200,30);
  bubble2=new Bubble(100,50,50);
}

function draw()
{
  background(0);
  bubble1.move();
  bubble1.show();
   bubble2.move();
  bubble2.show();
}
