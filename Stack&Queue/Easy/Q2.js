// Implement Stack using LL

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// class Stack {
//   constructor() {
//     this.top = null;
//     this.sizeCount = 0;
//   }
//   push(x) {
//     const newNode = new Node(x);
//     newNode.next = this.top;
//     this.top = newNode;
//     this.sizeCount++;
//   }
//   pop() {
//     if (this.isEmpty()) return null;
//     let removed = this.top.data;
//     this.top = this.top.next;
//     this.sizeCount--;
//     return removed;
//   }
//   peek() {
//     if (this.isEmpty()) return null;
//     return this.top.data;
//   }
//   size() {
//     return this.sizeCount;
//   }

//   isEmpty() {
//     return this.top === null;
//   }
// }

// let s = new Stack();

// s.push(10);
// s.push(20);
// s.push(30);

// console.log(s.peek());
// s.pop();
// console.log(s.size());
// console.log(s.isEmpty());

// Implement Queue using LL

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.sizeCount = 0;
  }
  push(x) {
    const newNode = new Node(x);
    if (this.front == null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.sizeCount++;
  }
  pop() {
    if (this.isEmpty()) return null;
    const removed = this.front.data;
    this.front = this.front.next;
    if (this.front == null) {
      this.rear = null;
    }
    this.sizeCount--;
    return removed;
  }
  peek() {
    return this.isEmpty() ? null : this.front.data;
  }

  size() {
    return this.sizeCount;
  }

  isEmpty() {
    return this.front === null;
  }
}
let q = new Queue();

q.push(10);
q.push(20);
q.push(30);

console.log(q.peek()); // 10
console.log(q.pop()); // 10
console.log(q.peek()); // 20
console.log(q.size()); // 2
