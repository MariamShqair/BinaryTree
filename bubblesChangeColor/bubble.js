


function bubble(x,y)
{ 
    
    this.x = x;
    this.y = y;
    
    this.display = function(){
    
    
    stroke(random(1,255),random(1,255),0)
    ellipse(this.x, this.y, 40, 40)
    noFill()
    
    }
    
      this.move = function(){
        this.x = this.x + random(-1,1)
        this.y = this.y + random(-1,1)
    }
    this.changeColor = function(){
       fill(255,2,25)
  }
  this.checkDist = function(xp,yp){
       
    let mouseloc = dist(xp ,this.y ,this.x,yp ) 
   //console.log(mouseloc)
    if(mouseloc <=20 ){
      return true
    }else{
      return false
    }
}
}

 
    // bubble[i]={
    //     x:random(0,width),
    //     y:random(0,height),
    //     display() {
    //         noFill()
    //         stroke(random(1,255),random(1,255),0)
    //         if(shap[(Math.ceil(Math.random() * 2))-1]==="rect")
    //             rect(this.x, this.y, 24, 24)
    //         else (shap[(Math.ceil(Math.random() * 2))-1] ==="ellipse")
    //             ellipse(this.x, this.y, 24, 24)
            
    //     },
    //     move() {
    //         this.x = this.x + random(-1,1)
    //         this.y = this.y + random(-1,1)
    //     }

    // }

    
  