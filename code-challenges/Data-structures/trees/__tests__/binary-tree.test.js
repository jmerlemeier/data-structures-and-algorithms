'use strict';

const BinaryTree = require('../binary-tree').BinaryTree;
const Node = require('../binary-tree').Node;

describe('Testing FindMaxValue function', () => {
  it('Can Find the max value in a tree', () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;

    let tree = new BinaryTree(one);

    expect(tree.findMaxValue(tree.max)).toBe(9);
  })
});
