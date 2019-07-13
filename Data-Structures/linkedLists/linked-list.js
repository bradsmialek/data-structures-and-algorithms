'use strict'

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
  // [10]->[12]->[14]->null
  // 1. make node [val]
  // 2. insert new node at beginning [val]->[10]->[12]...
  insert(value) {
    let newNode = new Node(value)//new node made
    newNode.next = this.head;//this.head is still [10] now we make new node point(next) to [10]  // [val]->[10]
    this.head = newNode;// now make the head the new node [val]
    
  }
  // [10]->[12]->[14]->null
  // check if list has node with given params(12)
  // traverse list starting at head and check each node value
  includes(value) { //(12)
    let current = this.head// [10] start
    while (current.next) {
      current = current.next;
        if (current.value === value) {
          console.log(true);
          return true;
        }
        current = current.next;
    }
    console.log(false);
    return false;
  }
  
  // [10]->[12]->[14]->null
  // append new node to end of list
  // 1. check if nodes exist -> if not make this new node the head
  // 2. if does exist -> start at head and iterate list until finds the tail and add new node [8]
  append(value){ // [8]
    if(this.head === null){//checking
      this.head = new Node(value); //new node is now the head
      return; // return to exit method or it will run the loop and append it again
    }
    let current = this.head; // assign variable to be the head [10] 
    while(current.next){ // [10]->[12]->[14]->null run loop until there is no node
      current = current.next;
    }
    current.next = new Node(value);// found the end -> put the new node on the end [10]->[12]->[14]->[8]->null
  }
  // returns all node values as a string
  toString() {
    let newString = '';
    let current = this.head;
    while (current) {
      newString += `, ${current.value}`;
      current = current.next;
    }
    return newString;
  }

  kFromTheEnd(k) {
    let counter = 0;
    let newCount = 0;
    let current = this.head;
    // console.log('current should equal this.head *9*, 22, 7, 5 =', current.value);
    while (current !== null) {
      // console.log('iterate current= ', current.value, 'now add to counter');
      current = current.next;
      counter++;
      // console.log('counter total =', counter);
    }
    current = this.head;
    while (current !== null) {
      // console.log('2nd while loop starts at current', current.value);
      let target = counter - k;
      // console.log('2nd while iterates current =',current.value);
      newCount++;
      // console.log('newCount', newCount);
       if (target === newCount) {
        // console.log(current.value);
          return current.value;
      }
      current = current.next;
    } 
  }
  showLinkedList() {
    let output ='[';
    let current = this.head;
    while (current !== null) {
      output += current.value;
      if (current.next !== null) {
        output += '] -> [';
      }
      current = current.next;
    }
    output += `] -> ${current}`;
    console.log(output);
  }
}

let list = new LinkedList();
console.log('List',list);
list.insert(14);
// console.log(list);
list.insert(12);
// console.log(list);
list.insert(10);
// console.log(list);
// list.insert(9); 
// console.log(list);
list.append('8');
// list.append('6');

list.includes(12);


list.toString();

list.showLinkedList();


// list.kFromTheEnd(2);

module.exports = LinkedList;



