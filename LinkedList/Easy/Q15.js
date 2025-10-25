// Check if a LinkedList is Palindrome or Not

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
var isPalindrome = function (head) {
  if (head == null || head.next == null) return true;
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let newHead = reverseLL(slow.next);
  let first = head;
  let second = newHead;

  while (second != null) {
    if (first.val != second.val) {
      reverseLL(newHead);
      return false;
    }
    first = first.next;
    second = second.next;
  }
  reverseLL(newHead);
  return true;
};

const arr = [1, 2, 2, 1, 3];
const head = arrToLL(arr);

console.log(isPalindrome(head));
