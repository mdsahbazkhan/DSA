// Doubly linkedlist Representation

// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.prev = null;
//     this.next = null;
//   }
// }
// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   add(data) {
//     const newNode = new ListNode(data);
//     if (!this.head) {
//       this.head = this.tail = newNode;
//       return;
//     }
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//   }
//   print() {
//     let current = this.head;
//     let result = "";
//     while (current) {
//       result += current.data + " ⇄ ";
//       current = current.next;
//     }
//     console.log(result + "NULL");
//   }
// }
// let DLL = new DoublyLinkedList();
// DLL.add(10);
// DLL.add(20);
// DLL.add(30);
// DLL.add(40);
// DLL.print();

//Convert Array to DoublyLinkedList

class ListNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
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
function printList(head) {
  let current = head;
  let str = "";
  while (current) {
    str += current.data + " ⇄ ";
    current = current.next;
  }
  console.log(str + "NULL");
}
let arr = [10, 20, 30, 40];
let head = convertArrToDLL(arr);
printList(head);
