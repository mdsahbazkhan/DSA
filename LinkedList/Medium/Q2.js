// Remove Nth Node From End of List

// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// function delNodeFromEnd(head, n) {
//   let temp = new ListNode(0);
//   temp.next = head;
//   let fast = temp;
//   let slow = temp;
//   for (let i = 0; i <= n; i++) {
//     fast = fast.next;
//   }
//   while (fast != null) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   slow.next = slow.next.next;
//   return temp.next;
// }

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// head = delNodeFromEnd(head, 4);
// let result = [];
// let curr = head;
// while (curr) {
//   result.push(curr.data);
//   curr = curr.next;
// }
// console.log(result);

// Remove Nth Node From front of List

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function delNodeFromFront(head, n) {
  if (n == 1) return head.next;
  let current = head;
  for (let i = 1; i < n - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;
  return head;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

head = delNodeFromFront(head, 3);
let result = [];
let curr = head;
while (curr) {
  result.push(curr.data);
  curr = curr.next;
}
console.log(result);
