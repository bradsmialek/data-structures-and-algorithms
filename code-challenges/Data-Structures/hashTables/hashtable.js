'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insert(value) {
    let newNode = new Node(value)
    newNode.next = this.head;
    this.head = newNode;

  }
  
  includes(value) { //(12)
    let current = this.head// [10] start
    // console.log('current = ',current);
    while (current) {
      if (current.value === value) {
        // console.log(true);
        return true;
      }
      else if (current === null){
        // console.log(false);
        return false;
      }
      current = current.next;
    }
  }

  
  append(value){ // [8]
    if(this.head === null){
      this.head = new Node(value); 
      return; 
    }
    let current = this.head; 
    while(current.next){ 
      current = current.next;
    }
    current.next = new Node(value);
  }
}


