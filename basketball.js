class Basketball{
    constructor(x,y,radius){
        var options={
            //isStatic:true,
            restitution:0.8,
            friction:0.5,
            density:0.8
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius;
        this.image=loadImage("basketball.png")
        World.add(world,this.body)
        }
        
    
        display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        imageMode(CENTER);
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,0,0,this.radius,this.radius)
        pop()
        }
        
}