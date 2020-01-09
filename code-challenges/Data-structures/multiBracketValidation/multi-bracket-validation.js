'use strict';

class Stack {
  constructor() {
    this.length = 0;
    this.storage = [];
  }

  push(value) {
    this.storage.push(value);
    this.length++;
  }

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

function validateBrackets(str) {
  const bracketsStr = str
    //split on every character
    .split('')
    //create new array of only brackets
    .filter(bracket => '{}[]()'.includes(bracket));

  const stack = new Stack;

  //make key value pairs
  const pair = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  }

  //if we see any opening bracket, lets add to our stack:
  for(let eachCharacter of bracketsStr){
    if('({['.includes(eachCharacter)) {
      stack.push(eachCharacter)
    }
    //if we see a closing bracket, lets remove from our stack:
    else {
      const popped = stack.pop();
      if (popped !== pair[eachCharacter]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = { Stack, validateBrackets};
