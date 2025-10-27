//Segregate Even And Odd Nodes In a Linked List
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrToLL(arr) {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

function evenOddList(head) {
  if (!head) return null;

  let evenHead = new ListNode(0); // dummy node
  let oddHead = new ListNode(0); // dummy node
  let even = evenHead;
  let odd = oddHead;
  let temp = head;

  while (temp) {
    if (temp.val % 2 === 0) {
      even.next = temp;
      even = even.next;
    } else {
      odd.next = temp;
      odd = odd.next;
    }
    temp = temp.next;
  }

  // connect even list to odd list
  even.next = oddHead.next;
  odd.next = null; // end of list

  return evenHead.next;
}

// Example 1
const arr = [6, 5, 3, 4, 7, 1, 2];
const head = arrToLL(arr);
const newHead = evenOddList(head);
printList(newHead); // Output: 6 -> 4 -> 2 -> 5 -> 3 -> 7 -> 1
