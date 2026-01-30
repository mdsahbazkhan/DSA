//Binary Tree Zigzag Level Order Traversal

var zigzagLevelOrder = function(root) {
    if(root===null)return [];
    let result=[];
    let queue=[root];
    let leftToRight=true;
    while(queue.length>0){
        let size=queue.length;
        let level=[];
        for(let i=0;i<size;i++){
            let node=queue.shift();
            if(leftToRight){
                level.push(node.val);
            }else{
                level.unshift(node.val);
            }
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);

        }
        result.push(level);
        leftToRight= !leftToRight;
    }
    return result
    
};