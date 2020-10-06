class String{
    constructor(stone,boypoint){
        var options={
            bodyA: stone,
            pointB: boypoint,
            stiffness:0.004, 
			length:1
            }
            this.pointB= boypoint
    this.string=Constraint.create(options)
    World.add(world,this.string)

    }
    fly(){
        this.string.bodyA = null;
    }

    display(){
        if(this.string.bodyA){
        
        var posA=this.string.bodyA.position
        var posB=this.pointB
        strokeWeight(4)
        line(posA.x,posA.y,posB.x,posB.y)
        }
    }
}
