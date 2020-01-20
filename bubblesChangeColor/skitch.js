
var index = 0
var arr = [100,125,55,166,500,14]
var shap=['rect','ellipse']
var bubbles = []



function setup() {
createCanvas(700, 400)

for(var i=0;i<50;i++)
    bubbles[i]=new bubble(random(0,width),random(0,height))
   
  }
// function mousePressed(){
//     bubbles.push(new bubble(mouseX,mouseY))
// }



/*------------------*/

//add bubbles when draged mouse 
// function mouseDragged(){
//     if(mouseY <= 1 || mouseY >= height|| mouseX<= 1 || mouseX >=width){
//          splice(0,bubbles.length)
//         //console.log(mouseX)
//      }else {
//           bubbles.push(new bubble(mouseX,mouseY))
//       }
  
// }
// delete from bigining when press enter
// function keyPressed(){
// bubbles.splice(0,1)
// }
/*-------------------------------*/
function draw() {
    background(0)
    for(let i = 0 ; i<bubbles.length ; i++)
       { 
           if(mouseIsPressed){
             // console.log( )
               if(bubbles[i].checkDist(mouseX,mouseY))
                   bubbles[i].changeColor()
           }
           bubbles[i].display()
           bubbles[i].move()
          
        //    if(bubbles[i].x <1 || bubbles[i].y<1 || bubbles[i].x > width ||bubbles[i].y>height)//console.log(bubbles[i])
        //     bubbles.splice(0,bubbles.length);

         }
         
        //  if(bubbles.length > 50)
        //   bubbles.splice(0,bubbles.length);
        
}
