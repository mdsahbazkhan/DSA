//Amount of Time for Binary Tree to Be Infected

var amountOfTime = function (root, start) {
    let parentMap = new Map();
    let nodeStart = null

    // Step 1: Mark Parents
    function markParent(node, parent) {
        if (!node) return;
        if (node.val === start) nodeStart = node
        parentMap.set(node, parent);
        markParent(node.left, node);
        markParent(node.right, node);
    }

    markParent(root, null);

    // Step 2: BFS from target
    let queue = [nodeStart];
    let visited = new Set();
    visited.add(nodeStart);
    let time = 0;

    while (queue.length > 0) {

        let size = queue.length;
        let infected = false;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            // Left
            if (node.left && !visited.has(node.left)) {
                visited.add(node.left);
                queue.push(node.left);
                infected = true;
            }

            // Right
            if (node.right && !visited.has(node.right)) {
                visited.add(node.right);
                queue.push(node.right);
                infected = true;
            }

            // Parent
            let parent = parentMap.get(node);
            if (parent && !visited.has(parent)) {
                visited.add(parent);
                queue.push(parent);
                infected = true;
            }
        }

        if(infected)time++;
    }

    return time;

};