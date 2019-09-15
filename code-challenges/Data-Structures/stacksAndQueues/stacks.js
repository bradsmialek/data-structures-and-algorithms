'use strict';

const Node = require('../linkedLists/node.js');

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;

class Stack {

  constructor() {
    this.top = null;
    this.stack = [];
  }
  push(item){
    this.stack.push(item);
    this.top = new Node(item);

  }

  pop(){

    let item = this.stack.pop();
    this.top.value = this.stack[this.stack.length-1];
    return item;
  }

  peek(){
    return this.top;
  }

}

// let stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack);
// console.log(stack.pop());
// console.log(stack.peek());

module.exports = Stack;
