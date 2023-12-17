class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    // console.log(element)
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return "undefined";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
console.log(stack);
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.push(7));
console.log(stack.pop());
console.log(stack.peek());
