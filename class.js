class Bubble{
  constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.r=r;
  }
  move()
  {
    this.x+=random(-3,3);
    this.y+=random(-5,5);
  }
  show(){
    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(this.x,this.y,this.r);
  }
}
