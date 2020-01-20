


function bubble(x,y)
{ 
    
    this.x = x;
    this.y = y;
    this.color=color(0,0,0)
    this.display = function(){
    
    
    stroke(random(1,255),random(1,255),0)
    ellipse(this.x, this.y, 40, 40)
    fill(this.color)
    
    }
    
      this.move = function(){
        this.x = this.x + random(-1,1)
        this.y = this.y + random(-1,1)
    }
    
  this.clicked = function(){
 
    radius = 20 / 2;
    vectorX = mouseX - this.x;
    vectorY = mouseY - this.y;

    if (radius * radius > ( vectorX * vectorX + vectorY * vectorY))
        this.color = color(25,0,50); 
      
   
  
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

    
  