// Sort LinkedList
class ListNode {
  constructor(val) {
    this.val = val;
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

//Brute
// function sortList(head) {
//   let arr = [];
//   let temp = head;
//   while (temp != null) {
//     arr.push(temp.val);
//     temp = temp.next;
//   }

//   arr.sort((a, b) => a - b);
//   temp = head;
//   let i = 0;
//   while (temp != null) {
//     temp.val = arr[i];
//     i++;
//     temp = temp.next;
//   }
//   return head;
// }

//Optimal
function findMiddle(head) {
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
function mergeLL(list1, list2) {
  let dummy = new ListNode(-1);
  let current = dummy;
  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  if (list1 != null) current.next = list1;
  if (list2 != null) current.next = list2;
  return dummy.next;
}
var sortList = function (head) {
  if (head == null || head.next == null) return head;
  let middle = findMiddle(head);
  let leftHead = head;
  let rightHead = middle.next;
  middle.next = null;
  leftHead = sortList(leftHead);
  rightHead = sortList(rightHead);
  return mergeLL(leftHead, rightHead);
};
function print(head) {
  let str = "";
  let current = head;
  while (current) {
    str += current.val + "->";
    current = current.next;
  }
  str += "null";
  console.log(str);
}

const arr = [3, 4, 2, 1, 5];
let head = arrToLL(arr);
head = sortList(head);
print(head);
