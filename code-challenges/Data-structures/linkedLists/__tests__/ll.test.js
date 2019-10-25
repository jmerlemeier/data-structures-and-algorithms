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


//APPEND TEST 
describe('Test Challenge 1', () => {
  test('Can append a new node to the end of a linked list', () => {
      newLinkedList.append(4);
    expect(newLinkedList.size).toEqual(1);
  });
});

//INSERT BEFORE
describe('Test Challenge 2', () => {
  test('Can insert a node before a given node in the linked list', () => {
      newLinkedList.append(4);
      newLinkedList.append(5);
      newLinkedList.insertBefore(5,6);
      expect(newLinkedList.head.next.next.value).toEqual(6);
  });
});

//INSERT AFTER
describe('Test Challenge 3', () => {
  test('Can insert a node after a given node in the the linked list', () => {
      newLinkedList.append(4);
      newLinkedList.append(5);
      newLinkedList.insertAfter(5,6);
      expect(newLinkedList.head.next.next.value).toBe(6);
  });
});

//FROM THE END EXCEPTION!!!
describe('Test Challenge 4', () => {
  test('Where input is not a positive integer', () => {
    expect(newLinkedList.valueFromEnd(-8)).toBe('Exception');
  });
});

//TEST for MERGING 2 LINKED LISTS
describe('Test Challenge 5', () => {
  test('This will return a zipped list when given two lists', () => {
    linkedlist3.mergeLists(linkedlist4);
    expect(linkedlist3.head.next.value).toEqual(6);
  })
});
