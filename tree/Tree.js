let Tree = function(){
    this.root = null
   
}

Tree.prototype.addValue = function(val){
    // this.left < n || n!=null ? this.left : this.right
    if(this.root == null)
        {
            this.root = new Node
            this.root.addNode(val)
        }
    else{
        this.check(this.root , val)  
    }
}
    Tree.prototype.check = function(root ,value){
           
            if(root.value > value )
            {   
                if( root.left === null)
                   { 
                       root.left = new Node
                       return  root.left.addNode(value)
                    }
                else
                    return this.check(root.left , value)
                
              
            }
            else(root.value< value )
            {
                if( root.right ===null)
                    {
                        root.right = new Node
                        return root.right.addNode(value)
                    }
                else
                    return this.check(root.right , value)
            }
        }
    /*
    
    to make search u can skip search function in Tree by call in this way
    tree.search(tree.root,val)
    else call directly from Node search function
    tree.root.search(tree.root,val)

    */
Tree.prototype.search = function(root ,val){
   
    if(root.root){
        console.log(root)
        if(root.root.value === val)
            console.log(`${val} found`)
        else if(root.root.value > val && root.root.left != null)
            root.root.search(root.root.left , val)
        else if(root.root.value < val && root.root.right != null)
            root.root.search(root.root.right)
        
        
    }else if(root){
        root.search(root , val)
    }
  
}
    


