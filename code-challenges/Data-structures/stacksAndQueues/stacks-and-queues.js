'use strict';

class Node {
  constructor(value){
    this.value = value
    this.next = null;
  }
}


class Stack {
  constructor() {
    // this.topOfStack = null;
    this.length = 0;
    this.storage = [];
  }

  push(value) {
    this.storage.push(value);
    this.length++;
  }

  //LIFO, the top of the stack is the youngest stuff
  pop() {
    this.length--;
    return this.storage.pop();
  }

  peek() {
    return this.storage[0];
  }

  isEmpty(){
    if(this.storage.length === 0){
      return true;
    } else {
      return false;
    }
  }
}


class Queue {
  constructor(){
    this.storage = [];
    this.length = 0;
  }

  enqueue(value) {
    this.storage.push(value);
    this.length++;
  }

  dequeue(){
    this.length--
    return this.storage.shift();
  }

  peek() {
    return this.storage[this.length-1];
  }

  isEmpty(){
    if (this.storage.length === 0 ){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { Node, Stack, Queue}
