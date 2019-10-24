'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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
