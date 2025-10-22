// Insertion a node in DLL

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
function convertArrToDLL(arr) {
  if (arr.length == 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    current.next = newNode;
    newNode.prev = current;
    current = newNode;
  }
  return head;
}
//Insert a node before head

function insertBeforeHead(head, val) {
  let newHead = new ListNode(val);
  head.prev = newHead;
  newHead.next = head;
  return newHead;
}

//Insert a node before Tail

function insertBeforeTail(head, val) {
  if (!head) return new ListNode(val);
  let current = head;
  let newNode = new ListNode(val);
  while (current.next != null) {
    current = current.next;
  }
  if (!current.prev) {
    return insertBeforeHead(head, val); // new head
  }
  let prev = current.prev;
  prev.next = newNode;
  newNode.prev = prev;
  newNode.next = current;
  current.prev = newNode;
  return head;
}

// Insert a node before kth

function insertKthBefore(head, k, val) {
  let newNode = new ListNode(val);
  if (!head) return newNode;
  if (k == 1) {
    return insertBeforeHead(head, val);
  }
  let current = head;
  let count = 0;
  while (current != null) {
    count++;
    if (count == k) break;
    current = current.next;
  }
  if (!current) {
    return insertBeforeTail(head, val);
  }
  let prev = current.prev;
  prev.next = newNode;
  newNode.prev = prev;
  newNode.next = current;
  current.prev = newNode;
  return head;
}

function printDLL(head) {
  let curr = head;
  let result = "";
  while (curr) {
    result += curr.data + " ⇄ ";
    curr = curr.next;
  }
  console.log(result + "NULL");
}

//Test
let arr = [10, 20, 30, 40, 50];
let head = convertArrToDLL(arr);
console.log("Original DLL:");
printDLL(head);

//Insert before head
// head = insertBeforeHead(head, 9);
// console.log("After the insetion before head:");

// Insert before tail
// head = insertBeforeTail(head, 45);
// console.log("After the insetion before tail:");

// Insert before kth
head = insertKthBefore(head, 10, 15);
console.log("After the insetion before tail:");
printDLL(head);
