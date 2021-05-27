class Blocks {
    constructor(x,y,width,height){
       var options= {
          "restitution" : 0.4,
          "friction":0.0
         
       }
       this.Visiblity = 255;
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       
       World.add(world,this.body);
    }
    display(){
      if(this.body.speed < 3){
        // super.display();
         var pos = this.body.position;
         
         var angle = this.body.angle;
         push();
          //this.Visiblity = this.Visiblity - 5;
          //tint(255,this.Visiblity);
         translate (pos.x,pos.y);
         rotate (angle);
         strokeWeight(3);
         stroke ("black");
         fill ("lightblue");
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
          pop();
      }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
         
          pop();
        }
        
      
      
      
      
      
       
    }
}