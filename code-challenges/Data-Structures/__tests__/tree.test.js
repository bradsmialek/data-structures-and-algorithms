'use strict';


'use strict';
let BT = require('./tree.js').BinaryTree;
let Node = require('./tree.js').Node;
let two = new Node(2);
let seven = new Node(7);
let five = new Node(5);
let six = new Node(6);
let nine = new Node(9);
let eleven = new Node(11);
let four = new Node(4);
describe('Tree tests', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BT();
    expect(tree).toEqual({ root: null });
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BT();
    tree.root = two;
    expect(tree.root.value).toEqual(2);
  });
  it('Can successfully add a right child to a single root node', () => {
    let tree = new BT();
    tree.root = two;
    tree.root.right = five;
    expect(tree.root.right).toBeDefined();
  });
  it('Can successfully add a left child to a single root node', () => {
    let tree = new BT();
    tree.root = two;
    tree.root.right = five;
    tree.root.left = seven;
    expect(tree.root.left).toBeDefined();
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    let tree = new BT();
    tree.root = two;
    tree.root.right = five;
    tree.root.left = seven;
    tree.root.left = two;
    tree.root.right = six;
    tree.root.right = nine;
    tree.root.left = five;
    tree.root.right = eleven;
    tree.root.left = four;
    expect(tree.preOrder([2, 7, 2, 6, 5, 11, 5, 9, 4])).tobes
  });
  it('Can successfully return a collection from a inorder traversal', () => {
    let tree = new BT();
    tree.root = two;
    tree.root.right = five;
    tree.root.left = seven;
    tree.root.left = two;
    tree.root.right = six;
    tree.root.right = nine;
    tree.root.left = five;
    tree.root.right = eleven;
    tree.root.left = four;
    expect(tree.inOrder([2, 7, 5, 6, 11, 2, 5, 9, 4])).tobe
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    let tree = new BT();
    tree.root = two;
    tree.root.right = five;
    tree.root.left = seven;
    tree.root.left = two;
    tree.root.right = six;
    tree.root.right = nine;
    tree.root.left = five;
    tree.root.right = eleven;
    tree.root.left = four;
    expect(tree.postOrder([2, 5, 11, 6, 7, 4, 9, 5, 2])).tobe
  });
  it('can successfully return a collection from a breadth-first traversal', () => {
    let tree = new BT();
    tree.root = two;
    tree.root.right = five;
    tree.root.left = seven;
    tree.root.left = two;
    tree.root.right = six;
    tree.root.right = nine;
    tree.root.left = five;
    tree.root.right = eleven;
    tree.root.left = four;
    expect(tree.breadthFirst([2, 7, 5, 2, 6, 9, 5, 11, 4])).tobe
  });
  it('can successfully return value of the maximum node value', () => {
    let tree = new BT();
    tree.root = two;
    tree.root.right = five;
    tree.root.left = seven;
    tree.root.left = two;
    tree.root.right = six;
    tree.root.right = nine;
    tree.root.left = five;
    tree.root.right = eleven;
    tree.root.left = four;
    expect(tree.findMaxValue([11])).tobe
  });
})
