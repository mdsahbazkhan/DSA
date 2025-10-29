// Add 1 to a number represented by LL

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
function reverseLL(head) {
  let prev = null;
  let current = head;
  while (current != null) {
    let newNode = current.next;
    current.next = prev;
    prev = current;
    current = newNode;
  }
  return prev;
}
//Brute

// function add1No(head) {
//   head = reverseLL(head);
//   let temp = head;
//   let carry = 1;
//   while (temp != null) {
//     temp.val = temp.val + carry;
//     if (temp.val < 10) {
//       carry = 0;
//       break;
//     } else {
//       temp.val = 0;
//       carry = 1;
//     }
//     temp = temp.next;
//   }
//   if (carry == 1) {
//     let newNode = new ListNode(1);
//     head = reverseLL(head);
//     newNode.next = head;
//     return newNode;
//   }
//   head = reverseLL(head);
//   return head;
// }

//Optimal
function add1No(head) {
  let carry = helper(head);
  if (carry == 1) {
    let newNode = new ListNode(1);
    newNode.next = head;
    return newNode;
  }
  return head;
}
function helper(temp) {
  if (temp == null) return 1;
  let carry = helper(temp.next);
  temp.val = temp.val + carry;
  if (temp.val < 10) {
    return 0;
  }
  temp.val = 0;
  return 1;
}
function print(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

const arr = [1, 5, 9];
let head = arrToLL(arr);

head = add1No(head);
print(head);
