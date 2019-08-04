'use strict';

import { tsConstructorType } from "@babel/types";

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
    while(nodeQueue.lenght) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) {nodeQueue.push(current.left);}
      if(current.right) {nodeQueue.push(current.right);}
    }
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




//BST
class BinarySearchTree{
  constructor() {

  }

  add(val){
    

  }

  contains(){

  }
}
// insert(value) {
//create node with value
//traverse the tree
//if value
//}

//let btree = new BinaryTreeSearch();
// btree.insert(10);




// Features
// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
// Create a BinaryTree class
// Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
// At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.

// Create a BinarySearchTree class
// Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
// Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
// Structure and Testing
// Utilize the Single-responsibility principle: any methods you write should be clean, reusable, abstract component parts to the whole challenge. You will be given feedback and marked down if you attempt to define a large, complex algorithm in one function definition.

// Write tests to prove the following functionality:

