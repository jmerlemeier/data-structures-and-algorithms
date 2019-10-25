'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.size = 0;

  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    //create a new node
    let node = new Node(value);

    //set a variable for currentNode node. OUR POINTER!
    let currentNode;

    //if linked list brand new and we have no nodes, need to check if has head.
    //An initial linked list has a null head.
    if(!this.head) {
      this.head = node;
      this.size++;
      return;
    }

    //If head exists(not null), than we have at least one node.
    //Set currentNode to the head; 
    //TEMPORARILY ACTING AS POINTER
    currentNode = this.head;

    //start a while loop
    //This will show you if there are multiple nodes.
    while (currentNode.next){
      //in here we can definietly say there is an existing node.
      currentNode = currentNode.next; //transporting us to the end 
    }
    //Set currentNode.next to a new Node
    currentNode.next = node;
    this.size++;
  }

  insertBefore(value, newValue) {
    let node = new Node(newValue);
  
    //track previous
    let currentNode = this.head;
    let previousNode = this.head;
  
     if(currentNode.value === value){
      node.next = currentNode;
      this.head = node;
      this.size++;
     } else {
  
    currentNode = currentNode.next;
  
    //Lists can only go FORWARD
    while (currentNode){
      if(currentNode.value === value){
        previousNode.next = node;
        node.next = currentNode;
        this.size++;
        break;
      }
      //Move one step forward
        previousNode = previousNode.next;
        currentNode = currentNode.next;
      }
    }
   }
  
   insertAfter(value, newValue) {
    var node = new Node(newValue)
    let currentNode = this.head;
  
    if(currentNode.value === value) {
      node.next = currentNode;
      this.head = node;
    } else {
      currentNode = currentNode.next;
    }
  
    while(currentNode) {
      if(currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
      }
      currentNode = currentNode.next;
    }
  }

  valueFromEnd(value) {
    let currentNode = this.head;
    let counter = 0;

    while (currentNode !== null) {
        counter++
        currentNode = currentNode.next;
    }

    if (counter <= value || value < 0) {
        return 'Exception';
    }

    currentNode = this.head;
    let targetCounter = counter - value;

    for (let i = 1; i < targetCounter; i++) {
        currentNode = currentNode.next;
    }
    return currentNode.value
}

  mergeLists(linkedlist2) {
    let current = this.head;
    let secondCurrent = linkedlist2.head;

    while (secondCurrent !== null) {
      let helper1 = current.next;
      let helper2 = secondCurrent.next;
      current.next = secondCurrent; //first link
      secondCurrent.next = helper1;
      current = secondCurrent.next;
      secondCurrent = helper2
    }
    // console.log(JSON.stringify(linkedlist));
    return linkedlist;
  }
}

const linkedlist = new LinkedList();
const linkedlist2 = new LinkedList();

linkedlist.head = new Node(2);
linkedlist.head.next = new Node(3);
linkedlist.head.next.next = new Node(4);
linkedlist.head.next.next.next = new Node(5);

linkedlist2.head = new Node(6);
linkedlist2.head.next = new Node(7);
linkedlist2.head.next.next = new Node(8);
linkedlist2.head.next.next.next = new Node(9);

linkedlist.mergeLists(linkedlist2);


module.exports = {
  linkedList: LinkedList,
  node: Node,
}