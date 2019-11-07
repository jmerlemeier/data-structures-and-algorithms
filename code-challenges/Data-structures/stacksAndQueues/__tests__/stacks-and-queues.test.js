'use strict';

const { Stack, Queue } = require('../stacks-and-queues');

//============== STACK ================
describe('Testing Stack Class', () => {
  test('1. Can push onto a new stack', () => {
    const stack = new Stack();
    stack.push(2);
    expect(stack.storage).toEqual([2]);
  });

  test('2. Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(4);
    stack.push(6);
    expect(stack.storage).toEqual([2, 4, 6]);
  });

  test('3. Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(8);
    stack.pop(8);
    expect(stack.storage).toEqual([]);
  })

  test('4. Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(8, 10, 12);
    stack.pop(8, 10, 12);
    expect(stack.storage).toEqual([]);
  })

  test('5. Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(20, 40, 60);
    const peek = stack.peek()
    expect(peek).toEqual(20);
  })

  test('6. Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    console.log(stack);
    expect(stack.length).toEqual(0);
  })
});

//============== QUEUE ================
describe('Testing Queue Class', () => {
  test('1. Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(2);
    console.log(queue);
    expect(queue.length).toEqual(1);
  });

  test('2. Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(8);
    queue.enqueue(9);
    queue.enqueue(10);
    expect(queue.storage).toEqual([8, 9, 10]);
  });

  test('3. Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(30);
    queue.enqueue(60);
    queue.enqueue(90);
    const removed = queue.dequeue();
    expect(removed).toEqual(30);
  });

  test('4. Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    const peeked = queue.peek();
    expect(peeked).toEqual(3);
  });

  test('5. Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.storage).toEqual([]);
  });

  test('6. Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.length).toEqual(0);
  });

});
