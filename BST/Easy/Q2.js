// Floor in BST

function floor(root, x) {
    let floor=-1;
    while(root){
        if(root.data===x){
            floor=root.data;
            return floor;
        }
        else if(root.data<x){
            floor=root.data;
            root=root.right;
        }else{
           root= root.left
        }
    }
    return floor;
    
}