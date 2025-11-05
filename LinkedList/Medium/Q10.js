// Copy List with Random Pointer

//brute
class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

function copyRandomList(head) {
  let temp = head;
  let mpp = new Map();
  while (temp != null) {
    let newNode = new Node(temp.val);
    mpp[temp] = newNode;
    temp = temp.next;
  }
  temp = head;
  while (temp != null) {
    let copynode = mpp[temp];
    copynode.next = mpp[temp.next];
    copynode.random = mpp[temp.random];
    temp = temp.next;
  }
  return mpp[head];
}

//Optimal
// function insertCopyInBetween(head) {
//   let temp = head;
//   while (temp != null) {
//     let copyNode = new Node(temp.val);
//     copyNode.next = temp.next;
//     temp.next = copyNode;
//     temp = temp.next.next;
//   }
// }
// function connectRandomPointer(head) {
//   let temp = head;
//   while (temp != null) {
//     let copyNode = temp.next;
//     if (temp.random) {
//       copyNode.random = temp.random.next;
//     } else {
//       copyNode.random = null;
//     }
//     temp = temp.next.next;
//   }
// }
// function getDeepCopyList(head) {
//   const dummynode = new Node(-1);
//   let res = dummynode;
//   let temp = head;
//   while (temp != null) {
//     res.next = temp.next;
//     temp.next = temp.next.next;
//     res = res.next;
//     temp = temp.next;
//   }
//   return dummynode.next;
// }
// var copyRandomList = function (head) {
//   insertCopyInBetween(head);
//   connectRandomPointer(head);
//   return getDeepCopyList(head);
// };

// Create nodes
let node1 = new Node(7);
let node2 = new Node(13);
let node3 = new Node(11);
let node4 = new Node(10);
let node5 = new Node(1);

// Connect next pointers
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Connect random pointers
node1.random = null;
node2.random = node1;
node3.random = node5;
node4.random = node3;
node5.random = node1;

// Call your function
let copiedList = copyRandomList(node1);

// Print copied list to verify
let temp = copiedList;
while (temp != null) {
  console.log(
    "Val:",
    temp.val,
    " Random:",
    temp.random ? temp.random.val : "null"
  );
  temp = temp.next;
}
