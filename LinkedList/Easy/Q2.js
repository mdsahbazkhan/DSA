//Traverse in LinkedList and find length and search element
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrToLL(arr) {
  if (arr.length == 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// function traverseList(head) {
//   let current = head;
//   while (current) {
//     console.log(current.val);
//     current = current.next;
//   }
// }
// function getLength(head) {
//   let current = head;
//   let count = 0;
//   while (current) {
//     count++;
//     current = current.next;
//   }
//   return count;
// }
// const arr = [20, 30, 40, 50];
// const head = arrToLL(arr);
// console.log("Traverse list:");
// traverseList(head);

// console.log("Length of list:", getLength(head));

//search

function searchInList(head, target) {
  let current = head;
  let index = 0;
  while (current) {
    if (current.val == target) {
      return `Found ${target} at index ${index}`;
    }
    current = current.next;
    index++;
  }
  return `${target} not found in list`;
}
const arr = [20, 30, 40, 50];
const head = arrToLL(arr);

console.log(searchInList(head, 40));
