class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function convertArrToLL(arr) {
  if (arr.length == 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
function deleteDuplicates(head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head) {
    if (head.next && head.data === head.next.data) {
      while (head.next && head.data === head.next.data) {
        head = head.next;
      }
      prev.next = head.next;
    } else {
      prev = prev.next;
    }
    head = head.next;
  }
  return dummy.next;
}
function printList(head) {
  let current = head;
  let str = "";
  while (current) {
    str += current.data + " -> ";
    current = current.next;
  }
  str += "null";
  console.log(str);
}
let arr = [1, 2, 3, 3, 4, 4, 5];
let head = convertArrToLL(arr);
head = deleteDuplicates(head);
printList(head);
