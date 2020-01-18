var index = 0
var arr = [100,125,55,166,500,14]
var shap=['rect','ellipse']
var bubbles = []



function setup() {
createCanvas(700, 400)

for(var i=0;i<40;i++)
    bubbles[i]=new bubble
   
  }

function draw() {
    background(0)
    for(let i = 0 ; i< bubbles.length ; i++)
       {
           bubbles[i].display()
           bubbles[i].move()
          
         }

        
}
function bubble()
{ 
    this.x = random(0,width);
    this.y = random(0,height);
    this.display = function(){
    noFill()
    stroke(random(1,255),random(1,255),0)
    if(shap[(Math.ceil(Math.random() * 2))-1]==="rect")
        rect(this.x, this.y, 24, 24)
    else (shap[(Math.ceil(Math.random() * 2))-1] ==="ellipse")
        ellipse(this.x, this.y, 24, 24)
    

    }
      this.move = function(){
        this.x = this.x + random(-1,1)
        this.y = this.y + random(-1,1)
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
