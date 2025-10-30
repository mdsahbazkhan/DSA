// . Delete all occurrences of a Key in DLL

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
    newNode.prev = current;
    current = newNode;
  }
  return head;
}
function deleteAllOccurDLL(head, val) {
  if (head == null) return null;
  if (head.next == null && head.data == val) return null;
  let temp = head;

  while (temp != null) {
    let prev = temp.prev;
    let front = temp.next;
    if (temp.data == val) {
      if (temp == head) {
        head = temp.next;
        if (head) head.prev = null;
      } else {
        if (prev) prev.next = front;
        if (front) front.prev = prev;
      }
    }
    temp = front;
  }
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
let arr = [10, 4, 10, 10, 6, 10];
let head = convertArrToDLL(arr);
console.log("Original DLL:");
printDLL(head);

head = deleteAllOccurDLL(head, 10);
printDLL(head);
