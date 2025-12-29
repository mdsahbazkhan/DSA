class Stack {
  constructor() {
    this.q = [];
    this.front = 0;
  }

  // Push element
  push(x) {
    this.q.push(x);
    let size = this.q.length - this.front;
    for (let i = 0; i < size - 1; i++) {
      this.q.push(this.q[this.front]);
      this.front++;
    }
  }

  // Pop element
  pop() {
    if (this.isEmpty()) return null;
    return this.q[this.front++];
  }

  // Peek / Top
  peek() {
    if (this.isEmpty()) return null;
    return this.q[this.front];
  }

  // Size
  size() {
    return this.q.length;
  }

  // Empty check
  isEmpty() {
    return this.front >= this.q.length;
  }
}
