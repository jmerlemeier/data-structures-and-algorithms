// let Stack = require('../queue-with-stacks').stack;
let Queue = require('../queue-with-stacks').pseudoClass;

describe('Test Challenge 1', () => {
  test('Can add a value to the stack', () => {
    //make a new instance
    let newElement = new Queue();
    newElement.enqueue(8);
    expect(newElement.stack1.storage).toEqual([8]);
  });
});

describe('Test Challenge 2', () => {
  test('Can remove a value from the stack', () => {
    //make a new instance
    let newElement = new Queue();
    newElement.enqueue(3);
    newElement.enqueue(4);
    newElement.dequeue();
    expect(newElement.stack1.storage).toEqual([]);
    expect(newElement.stack2.storage).toEqual([4]);
  });
});
