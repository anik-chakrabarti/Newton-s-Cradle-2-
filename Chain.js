class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX ;
        this.offsetY = offsetY ;

        var options = {
            bodyA: bodyA , 
            bodyB: bodyB ,
            pointB :{x:this.offsetX, y:this.offsetY},
            lenght: 200,
            stiffness : 1

        }
    
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    

    display(){

        var pointA = this.chain.bodyA.position ;
        var pointB = this.chain.bodyB.position ;

        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
} 