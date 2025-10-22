// Reverse Doubly linkedList

//Brute
// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function convertArrToDLL(arr) {
//   if (arr.length == 0) return null;
//   let head = new ListNode(arr[0]);
//   let current = head;
//   for (let i = 1; i < arr.length; i++) {
//     let newNode = new ListNode(arr[i]);
//     current.next = newNode;
//     newNode.prev = current;
//     current = newNode;
//   }
//   return head;
// }
// function reverseDll(head) {
//   let current = head;
//   let stack = [];
//   while (current != null) {
//     stack.push(current.data);
//     current = current.next;
//   }
//   current = head;
//   while (current != null) {
//     current.data = stack[stack.length - 1];
//     stack.pop();
//     current = current.next;
//   }
//   return head;
// }

// function printDLL(head) {
//   let curr = head;
//   let result = "";
//   while (curr) {
//     result += curr.data + " ⇄ ";
//     curr = curr.next;
//   }
//   console.log(result + "NULL");
// }

// //Test
// let arr = [10, 20, 30, 40, 50];
// let head = convertArrToDLL(arr);
// console.log("Original DLL:");
// printDLL(head);

// head = reverseDll(head);
// printDLL(head);

//Optimal
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
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
function reverseDll(head) {
  let last = null;
  let current = head;
  while (current != null) {
    last = current.prev;
    current.prev = current.next;
    current.next = last;
    current = current.prev;
  }
  // temp now points to old prev of new head
  if (current != null) {
    head = current.prev; // new head
  }
  return last.prev;
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

//Test
let arr = [10, 20, 30, 40, 50];
let head = convertArrToDLL(arr);
console.log("Original DLL:");
printDLL(head);

head = reverseDll(head);
printDLL(head);
