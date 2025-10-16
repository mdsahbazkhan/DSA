// Delete Node in a Linked List

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);

function deleteNode(node) {
  // Copy value of next node
  node.val = node.next.val;
  // Skip the next node
  node.next = node.next.next;
}

function printList(head) {
  let current = head;
  let str = "";
  while (current) {
    str += current.val + " -> ";
    current = current.next;
  }
  str += "null";
  console.log(str);
}

let nodeToDelete = head.next;
deleteNode(nodeToDelete);

console.log("Linked List after deleting node 5:");
printList(head);
