'use strict';

const LinkedList = require('../linkedLists/linked-list.js');

function reverseList(){

  
  let zipList = new LinkedList();

  
  
  console.log('ziplist', zipList.showLinkedList());
  return zipList.head;
}



let list = new LinkedList();

list.insert(4);
list.insert(3);
list.insert(2);
list.insert(1);
list.showLinkedList();




module.exports = reverseList;
