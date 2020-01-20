
  
  // Sketch Two
  var colorfullBubbleSquare = function(p) { 
    
    var bubbles=[]
    var shap=['rect','ellipse']
    p.setup = function() {
      p.createCanvas(500,700);
      for(var i=0 ; i<50 ; i++){
        bubbles[i]=new bubble(p.random(1,p.width),p.random(1,p.height))
   }
    }
  
    p.draw = function() {
        p.background(0)
        for(let i = 0 ; i<bubbles.length ; i++)
           {
               bubbles[i].display()
               bubbles[i].move()
            //    if(bubbles[i].x <1 || bubbles[i].y<1 || bubbles[i].x > p.width ||bubbles[i].y>p.height)//console.log(bubbles[i])
            //     bubbles.splice(0,bubbles.length);
    
             }
       
  
    }
     function bubble(x,y)
        { 
            
            this.x = x;
            this.y = y;
            
            this.display = function(){
            p.noFill()
            p.stroke(p.random(1,255),p.random(1,255),0)
            p.ellipse(this.x, this.y, p.random(10,100), p.random(10,100))
            
             if(shap[(Math.ceil(Math.random() * 2))-1]==="rect")
                 p.rect(this.x-3, this.y, 24, 50)
             else (shap[(Math.ceil(Math.random() * 2))-1] ==="ellipse")
                 p.ellipse(this.x, this.y, 24, 24)
            
             }
            
            this.move = function(){
                this.x = this.x + p.random(-1,1)
                this.y = this.y + p.random(-1,1)
            }
        }

  }; 
  var dragCircleByMouse = function(p){
      var circles=[]
      p.setup = function(){
        p.createCanvas(500,400)
        
      }
      p.draw = function(){
       p.background(0)
              for(var i=0; i<circles.length;i++)
                    {circles[i].display()
                        circles[i].move()
                    }

      }
     p.mousePressed = function(){
         if((p.mouseX >= 1 &&p.mouseX <=500 )&& (p.mouseY >= 1 && p.mouseY <= 400))
            circles.push(new cir(p.mouseX,p.mouseY))
        
            
     }
     function cir(x,y) {
        this.x=x
        this.y=y
        this.speed = 10
        this.startpoint=this.y
        this.midheight=p.height - (p.height-this.startpoint)/2
        this.count=0

        this.display = function(){
            p.stroke(255)
            p.noFill()
            p.ellipse(this.x,this.y,30,30)
        }
        this.move = function(){
            this.y +=this.speed
        
             if(this.y >= p.height )
                {
                    
                    this.speed *= -1
                   this.count++
                } 
            if(this.count ===1 && this.y <= this.midheight)
            {
                this.count--
                this.speed *=-1
             
            }
            
                
        }
        
     }
  }
//var myp5 = new p5(colorfullBubbleSquare, 'c1');
var myp5 = new p5(dragCircleByMouse, 'c2');
 
 
  