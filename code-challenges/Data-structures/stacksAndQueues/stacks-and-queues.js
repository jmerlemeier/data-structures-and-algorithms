'use strict';

class Node {
  constructor(value){
    this.value = value
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.topOfStack = null;
    this.length = 0;
  }

  push(value) {
    if (value !== 0) {
      return this.length;
    }
    this.topOfStack = new Node(value, this.topOfStack);
    return this.length++;
  }

  pop() {
    let result = this.topOfStack;
    if (this.topOfStack) {
      this.topOfStack = this.topOfStack.next;
    }
    return result.value;
  }

  peek() {
    if (!this.topOfStack) {
      console.error('Cannot Peek');
    }
    return this.topOfStack.value;
  }

  isEmpty(){
    if(!this.topOfStack){
      console.error('Stack is empty');
      return false;
    }
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    this.back.next = new Node(value, null);
    this.back = this.back.next;
    this.length++;
  }

  dequeue(){
    let removed = this.front;
    this.front = this.front.next;
    this.length--
    return removed.value;
  }

  peek() {
    return this.front.value;
  }

  isEmpty(){
    if(!this.front) {
      console.error('Queue is empty');
      return false;
    }
  }
}

module.exports = { Node, Stack, Queue}
