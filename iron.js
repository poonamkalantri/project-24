class Iron{
	constructor(x,y,width,height){
        var options = {
            'restitution':0.08,
            'friction':9,
            'density':100
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
	display(){
        
			var ironpos=this.body.position;	
            var ironangle =this.body.angle;	
			push()
			translate(ironpos.x, ironpos.y);
            rotate (ironangle);
			rectMode(CENTER)
			fill("black");
            rect(0, 0, this.width, this.height);
			pop()
	}

}