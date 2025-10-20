// Insert element at Nth index
// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// function arrToLL(arr) {
//   if (arr.length == 0) return null;
//   let head = new ListNode(arr[0]);
//   let current = head;
//   for (let i = 1; i < arr.length; i++) {
//     current.next = new ListNode(arr[i]);
//     current = current.next;
//   }
//   return head;
// }

// function InsertAtN(head, val, n) {
//   let newNode = new ListNode(val);
//   if (n === 1) {
//     newNode.next = head;
//     return newNode;
//   }
//   let current = head;
//   for (let i = 1; i < n - 1 && current != null; i++) {
//     current = current.next;
//   }
//   if (current === null) return head;
//   newNode.next = current.next;
//   current.next = newNode;

//   return head;
// }

// function print(head) {
//   let str = "";
//   let current = head;
//   while (current) {
//     str += current.data + "->";
//     current = current.next;
//   }
//   str += "null";
//   console.log(str);
// }

// const arr = [10, 20, 30, 40];
// let head = arrToLL(arr);
// head = InsertAtN(head, 6, 1);
// print(head);

//Insert value before element

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function arrToLL(arr) {
  if (arr.length == 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function InsertBeforeVal(head, ele, val) {
  let newNode = new ListNode(val);
  if (head === null) return newNode;
  if (head.data === ele) {
    newNode.next = head;
    return newNode;
  }
  let current = head;
  while (current.next !== null && current.next.data !== ele) {
    current = current.next;
  }
  if (current.next === null) return head;

  newNode.next = current.next;
  current.next = newNode;

  return head;
}
function print(head) {
  let str = "";
  let current = head;
  while (current) {
    str += current.data + "->";
    current = current.next;
  }
  str += "null";
  console.log(str);
}

const arr = [10, 20, 30, 40];
let head = arrToLL(arr);

head = InsertBeforeVal(head, 30, 25);
print(head);
