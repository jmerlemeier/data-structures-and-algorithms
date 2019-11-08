'use strict';

class BinaryTree{
  constructor(root){
    this.root = root;
  }

  findMaxValue(){

    let max = this.root.value;

    let _walk = (node) => {
      if(node.left) {
        _walk(node.left)
      }
      if(node.right) {
        _walk(node.right)
      }
      if(node.value > max){
        max = node.value;
      }
    }
    _walk(this.root);
    return max;
  }
}

class Node {
  constructor(value, left =null, right=null){
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

// console.log(tree.findMaxValue());

module.exports = { Node, BinaryTree };
