


function bubble(x,y)
{ 
    
    this.x = x;
    this.y = y;
    this.color=color(0,0,0)
    this.display = function(){
    
    
    stroke(255)
    fill(this.color)
    ellipse(this.x, this.y, 40, 40)
    
    
    }
    
      this.move = function(){
        this.x = this.x + random(-1,1)
        this.y = this.y + random(-1,1)
    }
    
  this.clicked = function(){
 
    let d = dist(mouseX , mouseY ,this.x, this.y)

    if ( d < 20 )
       {
            this.color = color(50,0,0)      
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

    
  