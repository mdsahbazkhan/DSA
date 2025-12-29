//Implement Queue using Stack
class Queue {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  // Push element
  push(x) {
    this.inStack.push(x);
  }

  // Pop element
  pop() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  // Peek / Top
  peek() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  // Size
  size() {
    return this.outStack.length;
  }

  // Empty check
  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
