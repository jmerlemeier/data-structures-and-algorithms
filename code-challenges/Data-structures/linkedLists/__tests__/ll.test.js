let linkedList = require('../linked-list').linkedList;
let Node = require('../linked-list').node;
let newLinkedList = new linkedList();
let test10LinkedList = new linkedList();



const linkedlist3 = new linkedList();
const linkedlist4 = new linkedList();

linkedlist3.head = new Node(2);
linkedlist3.head.next = new Node(3);
linkedlist3.head.next.next = new Node(4);
linkedlist3.head.next.next.next = new Node(5);

linkedlist4.head = new Node(6);
linkedlist4.head.next = new Node(7);
linkedlist4.head.next.next = new Node(8);
linkedlist4.head.next.next.next = new Node(9);


//TEST for MERGING 2 LINKED LISTS
describe('Test Challenge #1 for Lab-08', () => {
  test('This will return a zipped list when given two lists', () => {
    linkedlist3.mergeLists(linkedlist4);
    expect(linkedlist3.head.next.value).toEqual(6);
  })
});
