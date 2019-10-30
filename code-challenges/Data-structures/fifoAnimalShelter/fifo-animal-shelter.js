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

class PseudoQueue {
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

class AnimalShelter {
  constructor(){
    this.cat = new PseudoQueue();
    this.dog = new PseudoQueue(); 
  }

  enqueue(animal){
    if(animal.type === 'cat'){
      this.cat.enqueue(animal);
    }
    if(animal.type === 'dog'){
      this.dog.enqueue(animal);
    }
  }

  dequeue(preference){
    if(preference == 'dog'){
      return this.dog.dequeue(preference)
    } else if(preference == 'cat'){
       return this.cat.dequeue(preference)
    } else {
       return null;
    }
  } 
}

//=========================
module.exports = AnimalShelter;