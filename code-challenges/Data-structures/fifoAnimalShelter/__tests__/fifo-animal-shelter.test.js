'use strict';

const AnimalShelter = require('../fifo-animal-shelter');


describe('Test Challenge 1', () => {
  test('Can add a value to the queue', () => {
    const animalShelter = new AnimalShelter();
    const testAnimal = {
      type: 'cat',
      name: 'luna'
    };

    animalShelter.enqueue(testAnimal);
    expect(animalShelter.cat.stack1.storage).toEqual([{
      type: 'cat',
      name: 'luna'
    }]);
  });
});

describe('Test Challenge 2', () => {
  test('Can remove a value from the queue', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue({
      type: 'dog',
      name: 'bob'
    });
    animalShelter.enqueue({
      type: 'dog',
      name: 'larry'
    });
    animalShelter.dequeue('dog');
    expect(animalShelter.dog.stack2.storage).toEqual([{
      type: 'dog',
      name: 'larry'
    }]);
  });
});