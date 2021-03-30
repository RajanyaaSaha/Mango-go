class Launcher{
    constructor(body,ankonr){
        var options= {
            bodyA:body,
            pointB:ankonr,
            stiffness:0.04,
            length:10,
        }
        this.bodyA=body;
        this.pointB=ankonr;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }
    attach(body){
this.launcher.bodyA=body;
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
if(this.launcher.bodyA){
var pointA=this.bodyA.position;
var pointB=this.pointB;
strokeWeight(2);
line(pointA.x,pointA.y,pointB.x,point.B.y);


}
    }
}