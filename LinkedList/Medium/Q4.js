//  Delete the Middle Node of a Linked List

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrToLL(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
//Brute

// function deleteMiddle(head) {
//   let count = 0;
//   let temp = head;
//   while (temp != null) {
//     count++;
//     temp = temp.next;
//   }
//   let Middle = Math.floor(count / 2);
//   temp = head;
//   while (temp != null) {
//     Middle--;
//     if (Middle == 0) {
//       temp.next = temp.next.next;
//       break;
//     }
//     temp = temp.next;
//   }
//   return head;
// }

//Optimal

var deleteMiddle = function (head) {
  if (head == null || head.next == null) return null;
  let slow = head;
  let fast = head;
  fast = fast.next.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = slow.next.next;
  return head;
};

function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

// Example 1
const arr = [6, 5, 3, 4, 7, 1, 2];
const head = arrToLL(arr);
const newHead = deleteMiddle(head);
printList(newHead);
