let Node = function(){
    this.value =null
    this.left=null
    this.right=null
}
Node.prototype.addNode = function(val){
    
    this.value = val
    this.left  = null
    this.right = null
//return node
}
Node.prototype.search = function(root , val){
    if(root.value === val)
    console.log(root,`${val} found in search node `)
    else if(root.value > val && root.left != null)
     {      console.log(root,`${root.value} have value ${val} in left node `)
            root.search(root.left , val)}
    else if(root.value < val && root.right != null)
      {   console.log(root,`${root.value} have value ${val} in right node`)
            root.search(root.right,val)}
    
}

// Node.prototype.addNode = function(root,value){
//     if(value < root ||this.left === null)
//         if(true ){
//             this.node = new Node
//             this.left = value 
//             this.value = value  
//             console.log(this.left,value)
//         }else{
//             this.node = new Node
//             this.node.addNode(this.left,value)
//         }
//     else{
//         if( this.right === null){
//             this.right=value
//             this.value = value
//         }
//     }

   
                        
// }
