// Find the Middle of the Linked List

//Brute
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
    current = newNode;
  }
  return head;
}

// function middleNode(head) {
//   let count = 0;
//   let temp = head;
//   while (temp != null) {
//     count++;
//     temp = temp.next;
//   }
//   let middleNode = Math.floor(count / 2) + 1;
//   temp = head;
//   while (temp != null) {
//     middleNode--;
//     if (middleNode == 0) break;
//     temp = temp.next;
//   }
//   return temp;
// }

function printLL(head) {
  let curr = head;
  let result = "";
  while (curr) {
    result += curr.data + " -> ";
    curr = curr.next;
  }
  console.log(result + "NULL");
}

// //Test
let arr = [10, 20, 30, 40, 50, 60];
let head = convertArrToDLL(arr);
printLL(head);
head = middleNode(head);
printLL(head);

//Optimal

function middleNode(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
