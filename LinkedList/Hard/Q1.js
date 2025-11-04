//Reverse Nodes in K Group Size of LinkedList

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
function reverseLL(head) {
  let prev = null;
  let curr = head;

  while (curr != null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}
function findKthNode(temp, k) {
  k -= 1;
  while (temp != null && k > 0) {
    k--;
    temp = temp.next;
  }
  return temp;
}
function reverseKGroup(head, k) {
  let temp = head;
  let prevNode = null;
  while (temp != null) {
    let kthNode = findKthNode(temp, k);
    if (kthNode == null) {
      if (prevNode) prevNode.next = temp;
      break;
    }
    let nextNode = kthNode.next;
    kthNode.next = null;
    reverseLL(temp);
    if (temp == head) {
      head = kthNode;
    } else {
      prevNode.next = kthNode;
    }
    prevNode = temp;
    temp = nextNode;
  }
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
head = reverseKGroup(head, 3);
printLL(head);
