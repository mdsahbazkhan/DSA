// Implement Stack using array

// class Stack {
//   constructor() {
//     this.st = [];
//     this.top = -1;
//   }
//   push(x) {
//     this.top = this.top + 1;
//     this.st[this.top] = x;
//   }
//   pop() {
//     if (this.top === -1) return null;
//     let removed = this.st[this.top];
//     this.top = this.top - 1;
//     return removed;
//   }
//   peek() {
//     if (this.top == -1) return null;
//     return this.st[this.top];
//   }
//   size() {
//     return this.top + 1;
//   }
//   isEmpty() {
//     return this.top === -1;
//   }
// }

// let s = new Stack();

// s.push(10);
// s.push(20);
// s.push(30);

// console.log(s.peek()); // 30
// console.log(s.pop()); // 30
// console.log(s.size()); // 2
// console.log(s.isEmpty()); // false

// Implement Queue using Array

class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(x) {
    this.arr[this.rear] = x;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const removed = this.arr[this.front];
    this.front++;
    return removed;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.arr[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.peek());
q.dequeue();
console.log(q.size());
q.enqueue(40);
q.dequeue();
q.enqueue(90);
console.log(q.peek());
console.log(q.size());
