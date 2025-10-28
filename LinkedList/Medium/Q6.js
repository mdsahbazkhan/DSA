// Add Two Numbers
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
function addTwoNumbers(list1, list2) {
  if (list1 == null && list2 == null) return null;
  let temp = new ListNode(0);
  let dummy = temp;
  let carry = 0;
  while (list1 != null && list2 != null) {
    let sum = list1.val + list2.val + carry;
    let newNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    dummy.next = newNode;
    dummy = dummy.next;
    list1 = list1.next;
    list2 = list2.next;
  }
  while (list1 != null) {
    let sum = list1.val + carry;
    let newNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    dummy.next = newNode;
    dummy = dummy.next;
    list1 = list1.next;
  }
  while (list2 != null) {
    let sum = list2.val + carry;
    let newNode = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    dummy.next = newNode;
    dummy = dummy.next;
    list2 = list2.next;
  }
  if (carry > 0) {
    dummy.next = new ListNode(carry);
  }
  return temp.next;
}

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

const arr = [2, 4, 3];
const arr1 = [5, 6, 4];
let l1 = arrToLL(arr);
let l2 = arrToLL(arr1);
print(l1);
print(l2);
head = addTwoNumbers(l1, l2);
print(head);

//OR
// function addTwoNumbers(list1, list2) {
//   let dummy = new ListNode(0);
//   let temp = dummy;
//   let carry = 0;

//   while (list1 !== null || list2 !== null || carry > 0) {
//     let val1 = list1 ? list1.val : 0;
//     let val2 = list2 ? list2.val : 0;

//     let sum = val1 + val2 + carry;
//     carry = Math.floor(sum / 10);

//     temp.next = new ListNode(sum % 10);
//     temp = temp.next;

//     if (list1) list1 = list1.next;
//     if (list2) list2 = list2.next;
//   }

//   return dummy.next;
// }
