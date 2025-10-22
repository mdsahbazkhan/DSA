// Delete head node of DLL
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
function convertArrToDLL(arr) {
  if (arr.length == 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    current.next = newNode;
    newNode.prev = current;
    current = newNode;
  }
  return head;
}
//Delete Head

// function deleteHead(head) {
//   if (!head) return null;
//   let newHead = head.next;
//   if (newHead) {
//     newHead.prev = null;
//   }
//   return newHead;
// }
// Delete Tail

// function deleteTail(head) {
//   if (!head) return null;
//   if (!head.next) {
//     return null;
//   }
//   let current = head;
//   while (current.next != null) {
//     current = current.next;
//   }
//   let prev = current.prev;
//   prev.next = null;
//   current.next = null;
//   return head;
// }
// Delete Kth node

// function deleteKth(head, k) {
//   if (head == null) return null;
//   if (k === 1) {
//     return deleteHead(head);
//   }
//   let count = 1;
//   let current = head;
//   while (current != null) {
//     current = current.next;
//     count++;
//   }
//   if (!current) return head; // If k is more than length, do nothing
//   if (!current.next) return deleteTail(head);
//   let prev = current.prev;
//   let next = current.next;
//   prev.next = next;
//   next.prev = prev;
//   current.next = null;
//   current.prev = null;

//   return head;
// }

// Delete the Node of DLL

function deleteNode(head, temp) {
  if (!temp) return head;
  let prev = temp.prev;
  let next = temp.next;
  if (!prev) {
    if (next) next.prev = null;
    temp.next = null;
    return next;
  }
  if (!next) {
    prev.next = null;
    next.next = null;
    return head;
  }
  prev.next = next;
  next.prev = prev;
  temp.next = temp.prev = null;
  return head;
}
function printDLL(head) {
  let curr = head;
  let result = "";
  while (curr) {
    result += curr.data + " ⇄ ";
    curr = curr.next;
  }
  console.log(result + "NULL");
}
// Create DLL from array
let arr = [10, 20, 30, 40, 50];
let head = convertArrToDLL(arr);
console.log("Original DLL:");
printDLL(head);

// Delete head
// head = deleteHead(head);
// console.log("After deleting head:");

//Delete Tail
// head = deleteTail(head);
// console.log("After deleting tail:");

// Delete Kth node
// head = deleteKth(head, 1);
// console.log("After deleting Kth node:");

//Delete Node
head = deleteNode(head, head.next.next);
console.log("After deleting  node:");

printDLL(head);
