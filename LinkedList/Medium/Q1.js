// Delete Node in a Linked List

// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// function deleteNode(node) {
// // Copy value of next node
// node.val = node.next.val;
// // Skip the next node
// node.next = node.next.next;
// }

// function printList(head) {
//   let current = head;
//   let str = "";
//   while (current) {
//     str += current.val + " -> ";
//     current = current.next;
//   }
//   str += "null";
//   console.log(str);
// }

// let nodeToDelete = head.next;
// deleteNode(nodeToDelete);

// console.log("Linked List after deleting node 5:");
// const head = new ListNode(4);
// head.next = new ListNode(5);
// head.next.next = new ListNode(1);
// head.next.next.next = new ListNode(9);
// printList(head);

//Delete Tail from the linkedlist

class NodeList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteTail(head) {
  if (!head) return null;
  if (!head.next) return null;
  let current = head;
  while (current.next.next != null) {
    current = current.next;
  }
  current.next = null;
  return head;
}
function print(head) {
  let str = "";
  let current = head;
  while (current) {
    str += current.data + "->";
    current = current.next;
  }
  str += "null";
  console.log(str);
}

let head = new NodeList(1);
head.next = new NodeList(2);
head.next.next = new NodeList(3);
head.next.next.next = new NodeList(4);
head.next.next.next.next = new NodeList(6);
print(head);
head = deleteTail(head);
print(head);
