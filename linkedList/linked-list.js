'use strict'

class Node {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert(value) {
    this.head = new Node(value, this.head)
    return value;
  }
  includes(value) {
    let current = this.head
    while (current) {
      if (current.value === value) {
        return true
      }
      current = current.next;
    }
    return false
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node (value);
      return;
    }
    // let current = this.head
    // while (current.value === null) {
    //  if (this.head === null) {
    //    this.head = new Node (value);


    //   current = current.next;
    // }
    // current.next = new Node (value);
    // return value;

  toString() {
    let ans = '';
    let current = this.head;
    while (current) {
      ans += current.value;
      current = current.next;
    }
    return ans;
  }

}

let list = new LinkedList();
// console.log(list);
list.insert('brad');
// console.log(list);
// list.insert('jessica');
// console.log(list);
// list.insert('zach');
// console.log(list);
// list.insert('jonah'); 
// console.log(list);
list.append('jonny');
list.includes('jonny');
console.log(list);

module.exports = LinkedList;



