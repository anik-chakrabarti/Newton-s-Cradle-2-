class Bob{
    constructor(x,y,radius,forceX,forceY){

        this.body = Bodies.circle(x,y,radius-20,{restitution:1.2, friction:0});
        World.add(world,this.body);

        this.radius = radius ;
        this.forceX = forceX ;
        this.forceY = forceY ;
    }
      
    display(){
        var pos = this.body.position ;

        fill("pink");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}