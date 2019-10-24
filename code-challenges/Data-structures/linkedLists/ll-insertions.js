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
}

//========== Execultable Code ===========
const LinkedList = new LinkedList();
LinkedList.append(1);
LinkedList.insertBefore(1, 0);
console.log(JSON.stringify(11));

LinkedList.head = new Node(2);
LinkedList.head.next = new Node(3);


module.exports = Linkedlist;