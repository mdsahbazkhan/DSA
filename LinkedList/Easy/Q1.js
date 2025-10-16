// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   add(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//   }
//   print() {
//     let current = this.head;
//     let str = "";
//     while (current) {
//       str += current.data + "->";
//       current = current.next;
//     }
//     str += "null";
//     console.log(str);
//   }
// }

// let list = new LinkedList();
// list.add("10");
// list.add("20");
// list.add("30");
// list.add("40");
// list.print();

//convert Array to linkelist

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function ArraytoLinkedList(arr) {
  if (arr.length == 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
const arr = [20, 30, 40, 50];
const head = ArraytoLinkedList(arr);

// console.log("Head value:", head.val);
function printList(head) {
  let current = head;
  let str = "";
  while (current) {
    str += current.val + " -> ";
    current = current.next;
  }
  str += "null";
  console.log(str);
}

printList(head);
