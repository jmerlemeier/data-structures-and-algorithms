'use strict';

class Stack {
  constructor() {
    this.storage = [];
  }

  push(value){
    return this.storage.push(value);
  }

  pop(){
    return this.storage.pop();
  }
}

class PseudoClass {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.storage.length === 0) {
      if (this.stack1.storage.length === 0) {
        return 'Cannot dequeue because storage is empty';
      }
      while (this.stack1.storage.length > 0) {
        let plate = this.stack1.storage.pop();
        this.stack2.storage.push(plate);
      }
    }
    return this.stack2.storage.pop();
  }
}

// let newQueue = new PseudoClass();

// newQueue.enqueue('a');
// console.log(newQueue.stack1);
// newQueue.enqueue('b');
// console.log(newQueue.stack1);
// newQueue.enqueue('c');
// console.log(newQueue.stack1);
// newQueue.dequeue();
// console.log(newQueue.stack1);

module.exports = {
  stack: Stack,
  pseudoClass: PseudoClass,
}
