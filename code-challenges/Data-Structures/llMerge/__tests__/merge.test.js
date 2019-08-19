const Linkedlist = require('../../linkedLists/linked-list.js');
const mergeLists = require('../ll-merge.js');

//Test should include;
// “Happy Path” - Expected outcome
// Expected failure
// Edge Case (if applicable/obvious)

describe('Testing Merged Linked Lists', () => {

  //challenge 8 -merge tests
  let list;
  describe('testing mergeLists method', () => {
    it('should merge the values of 2 linked lists', () => {
      let l1 = new Linkedlist();
      let l2 = new Linkedlist();

      l1.append(5);
      l1.append(3);
      l1.append(1);
      l2.append(2);
      l2.append(4);
      l2.append(6);

      let result = mergeLists(l1, l2);
      expect(result.value).toEqual(l1.head.value);
    });

    it('merge two lists of different sizes.', () => {
      let l1 = new Linkedlist();
      let l2 = new Linkedlist();

      l1.append(5);
      l1.append(3);
      l1.append(1);
      l2.append(2);
      l2.append(4);
      l2.append(6);
      l2.append('bigger');
      l2.append('more bigger');
      let newList = mergeLists(l1, l2);
      expect(newList.value).toEqual(l1.head.value);
    });

    it('should throw a Error if a parameter value is not a linked list', () => {
      let l2 = new Linkedlist();
      l2.append(2);
      expect( function(){mergeLists('banana', l2)}).toThrow(new Error('Parameter must be a linked-list'));
    });

  });

});