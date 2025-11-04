//Rotate a LinkedList

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
function findNewLastNode(temp, k) {
  let cnt = 1;
  while (temp != null) {
    if (cnt == k) return temp;
    cnt++;
    temp = temp.next;
  }
  return temp;
}
function rotateRight(head, k) {
  if (head == null || k == 0) return head;
  let tail = head;
  let len = 1;
  while (tail.next != null) {
    tail = tail.next;
    len++;
  }
  if (k % len == 0) return head;
  k = k % len;
  tail.next = head;
  let newLastNode = findNewLastNode(head, len - k);
  head = newLastNode.next;
  newLastNode.next = null;
  return head;
}

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
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let head = convertArrToDLL(arr);
printLL(head);
head = rotateRight(head, 3);
printLL(head);
