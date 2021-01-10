class Bob
{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,40,options);
        World.add(world,this.body);
      
    }
    display()
    {
        ellipseMode(RADIUS);
        fill ("deepPink");
        ellipse(this.body.position.x,this.body.position.y,40,40); 
    }
}