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
  // 1. make node [8]
  // 2. insert new node at beginning [8]->[10]->[12]...
  insert(value) { //prepend
    let newNode = new Node(value)//new node made
    newNode.next = this.head;//this.head is still [10] now we make new node point(next) to [10]  // [8]->[10]
    this.head = newNode;// now make the head the new node [8]
    // console.log('this.head = ',this.head);

  }
  // [10]->[12]->[14]->null
  // check if list has node with given params(12)
  // traverse list starting at head and check each node value
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

  toString() {
    let newString = '';
    let current = this.head;
    while (current) {
      newString += `${current.value} , `;
      // console.log('newString =', newString);
      current = current.next;
    }
    return newString;
  }

  insertAfter(value, newValue){// [10]->[14]->null
    if(!this.head){
      this.head = new Node(newValue);
      return;
    }
    let current = this.head;
    while(current.value !== value){
      current = current.next;
    }
    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
  }
  //insertBefore(14, 'Before');
  // [10]->[14]->null
  insertBefore(value, newValue){// (14, 'I go before you')
    if(!this.head){
      this.head = new Node(newValue);
      return;
    }
    if(value === this.head.value){
      this.insert(newValue);
      return;
    }
    let current = this.head;

    while(current.next.value !== value){
      current = current.next;
    }
    let node = new Node(newValue);
    node.next = current.next;
    current.next = node;
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
      if(k > counter){
        throw new Error('There is no node here, try a smaller value.');
      }
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

// let list = new LinkedList();
// // console.log('List',list);
// list.insert(14);
// list.insert(12);
// list.insert(10);
// list.showLinkedList();
// list.append('8');
// list.append('6');
// list.includes(12);
// list.includes(19);
// list.toString();
// list.insertAfter(14, 'After');
// list.showLinkedList();
// list.insertAfter(10, 'You');
// list.showLinkedList();
// list.kFromTheEnd(2);
// list.showLinkedList();
// list.insertBefore(14, 'Before');
// list.showLinkedList();
// list.insertBefore(10,'Head');
// list.showLinkedList();
// let l1 = new LinkedList();
// let l2 = new LinkedList();

// l1.insert(9);
// l1.insert(7);
// l1.insert(5);
// l1.insert(3);
// l1.insert(1);

// l2.append(2);
// l2.append(4);
// l2.append(6);
// l2.append(8);
// l1.showLinkedList();
// l2.showLinkedList();

// mergeLists(l1,l2);
// reverseList();

module.exports = LinkedList;



