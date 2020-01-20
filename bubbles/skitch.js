var index = 0
var arr = [100,125,55,166,500,14]
var shap=['rect','ellipse']
var bubbles = []



function setup() {
createCanvas(700, 400)

// for(var i=0;i<4;i++)
//     bubbles[i]=new bubble(random(0,width),random(0,height))
   
  }
// function mousePressed(){
//     bubbles.push(new bubble(mouseX,mouseY))
// }



/*------------------*/

//add bubbles when draged mouse 
function mouseDragged(){
    if(mouseY <= 1 || mouseY >= height|| mouseX<= 1 || mouseX >=width){
         splice(0,bubbles.length)
        //console.log(mouseX)
     }else {
          bubbles.push(new bubble(mouseX,mouseY))
      }
  
}
// delete from bigining when press enter
// function keyPressed(){
// bubbles.splice(0,1)
// }
/*-------------------------------*/
function draw() {
    background(0)
    for(let i = 0 ; i<bubbles.length ; i++)
       {
           bubbles[i].display()
           bubbles[i].move()
           if(bubbles[i].x <1 || bubbles[i].y<1 || bubbles[i].x > width ||bubbles[i].y>height)//console.log(bubbles[i])
            bubbles.splice(0,bubbles.length);

         }
         
        //  if(bubbles.length > 50)
        //   bubbles.splice(0,bubbles.length);
        
}
function test(){
    alert('hi')
}

function bubble(x,y)
{ 
    
    this.x = x;
    this.y = y;
    
    this.display = function(){
    noFill()
    stroke(random(1,255),random(1,255),0)
    ellipse(this.x, this.y, 10, 10)
    // if(shap[(Math.ceil(Math.random() * 2))-1]==="rect")
    //     rect(this.x, this.y, 24, 24)
    // else (shap[(Math.ceil(Math.random() * 2))-1] ==="ellipse")
    //     ellipse(this.x, this.y, 24, 24)
    
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
