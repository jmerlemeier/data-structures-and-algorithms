class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = null;
  }

  //traversing a linked list
  traverse() {
    let current = this.head;

    while(current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const Node1 = new Node(1);

const ll = new LinkedList();

ll.head = new Node(1);
ll.head.next = new Node(2);
ll.traverse();