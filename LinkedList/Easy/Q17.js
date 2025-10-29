// Intersection of Two Linked Lists
// Linked List Node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Convert array to Linked List
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

// Print Linked List
function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}
//Brute
// function getIntersectionNode(headA, headB) {
//   if (!headA || !headB) return null;
//   let mpp = new Map();
//   let temp = headA;
//   while (temp != null) {
//     mpp.set(temp, 1);
//     temp = temp.next;
//   }
//   temp = headB;
//   while (temp != null) {
//     if (mpp.has(temp)) {
//       return temp;
//     }
//     temp = temp.next;
//   }
//   return null;
// }

//Better
// function getIntersectionNode(headA, headB) {
//   let temp1 = headA;
//   let n1 = 0;
//   let temp2 = headB;
//   let n2 = 0;
//   while (temp1 != null) {
//     n1++;
//     temp1 = temp1.next;
//   }
//   while (temp2 != null) {
//     n2++;
//     temp2 = temp2.next;
//   }
//   if (n1 < n2) {
//     return collision(headA, headB, n2 - n1);
//   } else {
//     return collision(headB, headA, n1 - n2);
//   }
// }
//Optimal
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let t1 = headA;
  let t2 = headB;
  while (t1 != t2) {
    t1 = t1.next;
    t2 = t2.next;
    if (t1 == t2) return t1;
    if (t1 == null) t1 = headB;
    if (t2 == null) t2 = headA;
  }
  return t1;
}
function collision(temp1, temp2, d) {
  while (d) {
    d--;
    temp2 = temp2.next;
  }
  while (temp1 != temp2) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }
  return temp1;
}
// Example
const common = arrToLL([2, 8, 4, 5]); // common intersection part

const listA = arrToLL([4, 1]);
let tempA = listA;
while (tempA.next) tempA = tempA.next;
tempA.next = common;

const listB = arrToLL([5, 6, 1]);
let tempB = listB;
while (tempB.next) tempB = tempB.next;
tempB.next = common;

const intersection = getIntersectionNode(listA, listB);

printList(listA); // 4 -> 1 -> 8 -> 4 -> 5
printList(listB); // 5 -> 6 -> 1 -> 8 -> 4 -> 5
console.log(
  intersection ? `Intersected at '${intersection.val}'` : "No intersection"
);
