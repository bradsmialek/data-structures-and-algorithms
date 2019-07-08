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

// let list = new LinkedList();
// list.insert('brad');
// list.insert('jessica');
// list.insert('zach');
// list.insert('jonah');

// console.log(list);

module.exports = LinkedList;



