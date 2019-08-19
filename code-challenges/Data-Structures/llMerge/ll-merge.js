'use strict';

const LinkedList = require('../linkedLists/linked-list.js');

function mergeLists(l1, l2){
  if(typeof l1 !== 'object' || typeof l2 !== 'object'){
    throw new Error('Parameter must be a linked-list');
  }

  let curr1 = l1.head;
  let curr2 = l2.head;
  let zipList = new LinkedList();

  while(curr1 || curr2){
    if(curr1){
      zipList.append(curr1.value);
      curr1 = curr1.next;
    }

    if(curr2){
      zipList.append(curr2.value);
      curr2 = curr2.next;
    }
  }
  console.log('List 1',l1.showLinkedList());
  console.log('List 2',l2.showLinkedList());
  console.log('ziplist',zipList.showLinkedList());
  return zipList.head;
}



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

// mergeLists(l1,l2);


module.exports = mergeLists;
