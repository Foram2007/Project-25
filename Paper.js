class Paper {
    constructor(x,y,radius){
    var options = {
        isStatic : false,
       restitution : 0.3,
       friction:0.5,
       density:1.8
    }
        this.body = Bodies.circle (x,y,radius,options)
        this.radius = radius
        this.image=loadImage("Paper.png")
        World.add(world,this.body)
    }
     display(){
         var paperpos = this.body.position
         fill("red")
         ImageMode(CENTRE)
         image (this.image,paperpos.x,paperpos.y,this.radius,this.radius)
        


     }
}