'use strict';

const Node = require('../linkedLists/node.js');


class Stack {

  constructor() {

    this.top = null;
    this.bottom = null;
  }
  push(item){
    this.top = new Node(item, this.top);
  }

  pop(){
    let item = this.stack.pop();
    this.top = this.stack[this.stack.length-1];
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
// console.log(stack.stack);
// console.log(stack.pop());
// console.log(stack.peek());

module.exports = Stack;
