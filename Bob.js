class Bob
{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        

        this.body=Bodies.circle(x,y,50,options);
        World.add(world,this.body);
      
    }
    display()
    {
        var bobpos=this.body.position;
        push();
        translate(bobpos.x, bobpos.y);
        ellipseMode(RADIUS);
        fill ("deepPink");
        ellipse(0,0,50,50);
        pop();
    }
}