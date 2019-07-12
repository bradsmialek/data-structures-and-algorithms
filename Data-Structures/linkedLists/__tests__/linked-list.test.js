const Linkedlist = require('../linked-list');

describe('Testing Singly Linked Lists', () => {

  let list;

  test('Can successfully instantiate an empty linked list', () =>{
    list = new Linkedlist();

    expect(list).toEqual({"head": null, "tail": null})
  });
  test('Can properly insert into the linked list', () => {
    let list = new Linkedlist();
    list.insert('brad')
    expect(list.head).toEqual({"next": null, "value": "brad"});
  });
  test('The head property will properly point to the first node in the linked list', () => {
    let list = new Linkedlist();
    list.insert('jessica');
    console.log(list.head.value);
    expect(list.head.value).toEqual('jessica');
    // eslint-disable-next-line no-trailing-spaces
    
  });
  test('Can properly insert multiple nodes into the linked list', () =>{
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
    expect(list.includes('brad','jessica', 'zach', 'jonah')).toBeTruthy();
  })
  test('It will return true when finding a value within the linked list that exists', () =>{
    let list = new Linkedlist();
    list.insert('brad');
    list.insert('jessica');
    list.insert('zach');
    list.insert('jonah');
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
    console.log(list.value);
    expect(list.includes('brad','jessica', 'zach', 'jonah')).toBeTruthy();
  })

  
});

