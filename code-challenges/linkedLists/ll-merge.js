'use strict';

function mergeLists(linkedlist, linkedlist2) {
  current = linkedlist.head;
  secondCurrent = linkedlist2.head;

  while(secondCurrent !== null){
    helper1 = current.next;
    helper2 = secondCurrent.next;

    current.next = secondCurrent;//first link
    secondCurrent.next = helper1;

    current = secondCurrent.next;
    secondCurrent = helper2; 
  }
  return linkedlist1;
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