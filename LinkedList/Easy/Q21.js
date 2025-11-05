//  Flattening a LinkedList

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.child = null;
  }
}
//Brute

// function flattenLinkedList(head) {
//   let temp = head;
//   let arr = [];

//   while (temp != null) {
//     let t2 = temp;
//     while (t2 != null) {
//       arr.push(t2.val);
//       t2 = t2.child;
//     }
//     temp = temp.next;
//   }

//   arr.sort((a, b) => a - b);

//   return convertArr(arr);
// }

// function convertArr(arr) {
//   if (arr.length === 0) return null;

//   let head = new ListNode(arr[0]);
//   let temp = head;

//   for (let i = 1; i < arr.length; i++) {
//     let newNode = new ListNode(arr[i]);
//     temp.child = newNode;
//     temp = temp.child;
//   }

//   return head;
// }

//Optimal

function mergeList(list1, list2) {
  let dummyNode = new ListNode(-1);
  let res = dummyNode;
  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      res.child = list1;
      res = list1;
      list1 = list1.child;
    } else {
      res.child = list2;
      res = list2;
      list2 = list2.child;
    }
    res.next = null;
  }
  if (list1) res.child = list1;
  else res.child = list2;
  return dummyNode.child;
}
function flattenLinkedList(head) {
  if (head == null || head.next == null) return head;
  let mergeHead = flattenLinkedList(head.next);
  return mergeList(head, mergeHead);
}
function printFlattenedList(head) {
  let temp = head;
  let result = [];
  while (temp != null) {
    result.push(temp.val);
    temp = temp.child;
  }
  console.log("Flattened Linked List:", result.join(" → "));
}

// Example input
let head = new ListNode(5);
head.child = new ListNode(7);
head.child.child = new ListNode(8);

head.next = new ListNode(10);
head.next.child = new ListNode(20);

head.next.next = new ListNode(19);
head.next.next.child = new ListNode(22);
head.next.next.child.child = new ListNode(50);

// Flatten and print
let flattened = flattenLinkedList(head);
printFlattenedList(flattened);
