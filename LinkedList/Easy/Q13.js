//Find the starting point of the Loop

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//Brute
// function hasCycle(head) {
//   let hashMap = new Map();
//   let current = head;
//   while (current != null) {
//     if (hashMap.has(current)) {
//       return current;
//     }
//     hashMap.set(current, true);
//     current = current.next;
//   }
//   return null;
// }
let head = new ListNode(3);
let second = new ListNode(2);
let third = new ListNode(0);
let fourth = new ListNode(-4);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second;
console.log(hasCycle(head));

// Optimal

function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      slow = head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
}
