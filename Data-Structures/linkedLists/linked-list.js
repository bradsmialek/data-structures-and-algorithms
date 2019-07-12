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

  kFromTheEnd(k) {
    let counter = 0;
    let newCount = 0;
    let current = this.head;
    console.log('current should equal this.head *9*, 22, 7, 5 =', current.value);

    while (current !== null) {
      console.log('iterate current= ', current.value, 'now add to counter');
      current = current.next;
      counter++;
      console.log('counter total =', counter);
    }

    current = this.head;

    while (current !== null) {
      console.log('2nd while loop starts at current', current.value);
      let target = counter - k;
      console.log('2nd while iterates current =',current.value);
      newCount++;
      console.log('newCount', newCount);
      if (target === newCount) {
        console.log(current.value);
        return current.value;
      }
      current = current.next;
    }
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
list.kFromTheEnd(3);

module.exports = LinkedList;



