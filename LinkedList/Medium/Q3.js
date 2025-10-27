// Odd Even Linked List

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
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

// Brute
// function oddEvenList(head) {
//   if (!head || !head.next) return head;
//   let arr = [];
//   let temp = head;
//   while (temp) {
//     arr.push(temp.val);
//     if (temp.next == null) break;
//     temp = temp.next.next;
//   }

//   temp = head.next;
//   while (temp) {
//     arr.push(temp.val);
//     if (temp.next == null) break;
//     temp = temp.next.next;
//   }
//   temp = head;
//   let j = 0;
//   while (temp != null) {
//     temp.val = arr[j];
//     j++;
//     temp = temp.next;
//   }
//   return head;
// }

//Optimal
function oddEvenList(head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even != null && even.next != null) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
}
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}
const arr = [2, 3, 1, 4, 5, 6];
const head = arrToLL(arr);
let newHead = oddEvenList(head);
printList(newHead);
