//Remove Linked List Elements
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function removeElements(head, val) {
  let temp = new ListNode(0);
  temp.next = head;
  let current = temp;
  while (current.next != null) {
    if (current.next.data == val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return temp.next;
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
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(2);

print(head);
removeElements(head, 2);
print(head);
