// Reverse Linked List

//Brute

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function arrToLL(arr) {
  if (arr.length == 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// function reverseLL(head) {
//   let temp = head;
//   let stack = [];
//   while (temp != null) {
//     stack.push(temp.data);
//     temp = temp.next;
//   }
//   temp = head;
//   while (temp != null) {
//     temp.data = stack[stack.length - 1];
//     stack.pop();
//     temp = temp.next;
//   }
//   return head;
// }

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
print(head);
head = reverseLL(head);
print(head);

// Optimal

// function reverseLL(head) {
//   let temp = head;
//   let prev = null;
//   while (temp != null) {
//     let front = temp.next;
//     temp.next = prev;
//     prev = temp;
//     temp = front;
//   }
//   return prev;
// }

function reverseLL(head) {
  if (head == null || head.next == null) return head;
  let newHead = reverseList(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;
  return newHead;
}
