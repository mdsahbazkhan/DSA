// Find the length of the Loop in LinkedList
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Brute

// function cycleLength(head) {
//   let temp = head;
//   let timer = 1;
//   let mpp = new Map();
//   while (temp != null) {
//     if (mpp.has(temp)) {
//       let value = mpp.get(temp);
//       return timer - value;
//     }
//     mpp.set(temp, timer);
//     timer++;
//     temp = temp.next;
//   }
//   return 0;
// }

//Optimal
function cycleLength(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      let count = 1;
      fast = fast.next;
      while (fast != slow) {
        count++;
        fast = fast.next;
      }
      return count;
    }
  }
  return 0;
}
// Creating nodes
let head = new ListNode(1);
let second = new ListNode(2);
let third = new ListNode(3);
let fourth = new ListNode(4);
let fifth = new ListNode(5);

// Connecting nodes
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

// Creating a loop: point 'fifth' back to 'third'
fifth.next = third;
console.log(cycleLength(head));
