const Linkedlist = require('../linked-list.js');


describe('Testing Singly Linked Lists', () => {

  let list;
  //Challenge 5 tests;
  test('Can successfully instantiate an empty linked list', () =>{
    list = new Linkedlist();
    expect(list).toEqual({'head': null})
  });
  test('Can properly insert into the linked list', () => {
    let list = new Linkedlist();
    list.insert('brad')
    expect(list.head).toEqual({'next': null, 'value': 'brad'});
  });
  test('The head property will properly point to the first node in the linked list', () => {
    let list = new Linkedlist();
    list.insert('jessica');
    list.insert(12);
    list.insert(10);
    expect(list.head.value).toEqual(10);

  });
  test('Can properly insert multiple nodes into the linked list', () =>{
    let list = new Linkedlist();
    list.insert(14);
    list.insert(12);
    list.insert(10);
    list.insert('jonah');
    expect(list.includes('jonah',10, 12, 14)).toBeTruthy();
  })
  test('It will return true when finding a value within the linked list that exists', () =>{
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    // console.log(list);
    expect(list.includes('zach')).toBeTruthy();
  })
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    expect(list.includes('jeff')).toBeFalsy();
  })
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    expect(list.includes('brad','jessica', 'zach', 'jonah')).toBeTruthy();
  })
})

//Challenge 6 tests
describe('testing append, insertBefore, and insertAfter methods', () => {

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    list.append('2')
    list.showLinkedList();
    expect(list.toString()).toEqual('jonah , zach , jessica , brad , 2 , ');
  });

    
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    list.append(2);
    list.append(4);
    list.append(6);
    list.append(8);
    expect(list.toString()).toEqual('jonah , zach , jessica , brad , 2 , 4 , 6 , 8 , ');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () =>{
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    list.insertBefore('zach', 6);
    expect(list.toString()).toEqual('jonah , 6 , zach , jessica , brad , ');
  })
  it('Can successfully insert a node before the first node of a linked list', () =>{
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    list.insertBefore('jonah', 6);
    expect(list.toString()).toEqual('6 , jonah , zach , jessica , brad , ');
  })
  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    list.insertAfter('zach', 6);
    expect(list.toString()).toEqual('jonah , zach , 6 , jessica , brad , ');
  })
  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    list.insertAfter('brad', 6);
    expect(list.toString()).toEqual('jonah , zach , jessica , brad , 6 , ');
  });
});

//Challenge 7 tests
describe('testing kFromTheEnd method', () => {
  it('Where k is greater than the length of the linked list', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    expect( function(){list.kFromTheEnd(8)}).toThrow(new Error('There is no node here, try a smaller value.'));
  });
  it('Where k and the length of the list are the same', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    expect(list.kFromTheEnd(4)).toBeUndefined();
  });
  it('Where k is not a positive integer', () =>{
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    expect(list.kFromTheEnd(-2)).toEqual(undefined);
    expect(list.kFromTheEnd('hi')).toEqual(undefined);
  });
  it('Where the linked list is of a size 1', () => {
    let list = new Linkedlist();
    list.insert('brad');
    expect(list.kFromTheEnd(-2)).toEqual(undefined);
  });
  test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    expect(list.kFromTheEnd(2)).toEqual('zach');
  })
});



