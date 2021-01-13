class Roof
{
	constructor()
	{
		var options={
			isStatic:true			
			}

		this.body=Bodies.rectangle(350,50,600,20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
					
			rectMode(CENTER)
			fill("dimgrey");
			rect(350,50,600,20);
			
			
	}

}