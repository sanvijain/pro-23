class package{
    constructor(x,y,width,height){
    var options={
            'restitution':0.4
             
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.position.x, this.position.y, this.width, this.height);
      
    }
}