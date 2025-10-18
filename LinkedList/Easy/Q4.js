// Insert element at head

// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// function convertArrToLL(arr) {
//   if (arr.length == 0) return null;
//   let head = new ListNode(arr[0]);
//   let current = head;
//   for (let i = 1; i < arr.length; i++) {
//     current.next = new ListNode(arr[i]);
//     current = current.next;
//   }
//   return head;
// }
// function InsertAtHead(head, val) {
//   let temp = new ListNode(val);
//   temp.next = head;
//   return temp;
// }
// function printList(head) {
//   let current = head;
//   let str = "";
//   while (current) {
//     str += current.data + " -> ";
//     current = current.next;
//   }
//   str += "null";
//   console.log(str);
// }
// let arr = [1, 2, 3, 4, 5];
// let head = convertArrToLL(arr);
// head = InsertAtHead(head, 12);
// printList(head);

// Insert element at Tail
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function convertArrToLL(arr) {
  if (arr.length == 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
function InsertAtTail(head, val) {
  if (head == null) {
    return new ListNode(val);
  }
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  let newNode = new ListNode(val);
  temp.next = newNode;
  return head;
}
function printList(head) {
  let current = head;
  let str = "";
  while (current) {
    str += current.data + " -> ";
    current = current.next;
  }
  str += "null";
  console.log(str);
}
let arr = [1, 2, 3, 4, 5];
let head = convertArrToLL(arr);
head = InsertAtTail(head, 12);
printList(head);
