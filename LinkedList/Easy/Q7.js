// Delete head node of DLL
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
function deleteHead(head) {
  if (!head) return null;
  let newHead = head.next;
  if (newHead) {
    newHead.prev = null;
  }
  return newHead;
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
// Create DLL from array
let arr = [10];
let head = convertArrToDLL(arr);
console.log("Original DLL:");
printDLL(head);

// Delete head
head = deleteHead(head);
console.log("After deleting head:");
printDLL(head);
