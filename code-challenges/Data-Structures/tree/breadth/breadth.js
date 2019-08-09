'use strict';


class Node {
  constructor (val){
    this.value = val;
    this.left = null;
    this.right = null;
  }

}

class BinaryTree {
  constructor (root = null){
    this.root = root;
  }

  preOrder() {
    let results = [];
    let _walk = (node) => {
      results.push(node.value);
      if(node.left) {_walk(node.left); }
      if(node.right) {_walk(node.right); }
    };
    _walk(this.root);
    return results;
  }

  postOrder(){
    let results = [];
    let _walk = (node) => {

      if(node.left) {_walk(node.left); }

      if(node.right) {_walk(node.right); }
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  inOrder(){
    let results = [];
    let _walk = (node) => {

      if(node.left) {_walk(node.left); }
      results.push(node.value);
      if(node.right) {_walk(node.right); }
    };
    _walk(this.root);
    return results;
  }

  levelOrder(){
    let results = [];
    let nodeQueue = [];
    nodeQueue.push(this.root);
    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) {nodeQueue.push(current.left);}
      if(current.right) {nodeQueue.push(current.right);}
    }
    return results;
  }

  breadthFirst() {
    let arr = [];
    let queue = [];
    let current = this.root;
    queue.push(current);
    function walk(current) {
      if (current.left) { queue.push(current.left) }
      if (current.right) { queue.push(current.right) }
      arr.push(current.val)
    }

    while (queue[0]) { 
      walk(queue.shift());
    }
    return arr;
  }
}

let ten = new Node(10);
let four = new Node(4);
let seven = new Node(7);
let nine = new Node(9);
let eleven = new Node(11);
let twelve = new Node(12);

ten.left = seven;
ten.right = twelve;
seven.left = four;
seven.right = eleven;
twelve.left = eleven;
twelve.right = nine;


let tree = new BinaryTree(ten);
console.log(tree);
console.log('tree preOrder :',tree.preOrder());
console.log('tree postOrder :',tree.postOrder());
console.log('tree inOrder :',tree.inOrder());
console.log('tree levelOrder :',tree.levelOrder());
console.log('breadthFirst traversal :', tree.breadthFirst());

