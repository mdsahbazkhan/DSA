// Find all Pairs with given Sum in DLL

// /Brute
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
//Brute
// function findPairs(head, sum) {
//   let temp1 = head;
//   let stack = [];
//   while (temp1 != null) {
//     let temp2 = temp1.next;
//     while (temp2 != null && temp1.data + temp2.data <= sum) {
//       if (temp1.data + temp2.data == sum) {
//         stack.push([temp1.data, temp2.data]);
//       }
//       temp2 = temp2.next;
//     }
//     temp1 = temp1.next;
//   }
//   return stack;
// }

function findTail(head) {
  let tail = head;
  while (tail.next != null) {
    tail = tail.next;
  }
  return tail;
}
//Optimal
function findPairs(head, sum) {
  let left = head;
  let right = findTail(head);
  let stack = [];
  while (left.data < right.data) {
    if (left.data + right.data == sum) {
      stack.push([left.data, right.data]);
      left = left.next;
      right = right.prev;
    } else if (left.data + right.data < sum) {
      left = left.next;
    } else {
      right = right.prev;
    }
  }
  return stack;
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
let arr = [10, 20, 30, 40, 50];
let head = convertArrToDLL(arr);
console.log("Original DLL:");
printDLL(head);
console.log(findPairs(head, 50));
