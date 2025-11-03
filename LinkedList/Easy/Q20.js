//Remove duplicates from sorted DLL

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
    newNode.prev = current;
    current = newNode;
  }
  return head;
}
function removeDuplicate(head) {
  let temp = head;
  while (temp != null && temp.next != null) {
    let nextNode = temp.next;
    while (nextNode != null && nextNode.data == temp.data) {
      nextNode = nextNode.next;
    }
    temp.next = nextNode;
    if (nextNode) nextNode.prev = temp;
    temp = temp.next;
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
let arr = [1, 1, 1, 2, 3, 3, 4];
let head = convertArrToDLL(arr);
console.log("Original DLL:");
printDLL(head);
head = removeDuplicate(head);
printDLL(head);
