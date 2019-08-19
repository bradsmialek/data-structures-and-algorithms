'use strict';

const Queue = require('../queues.js');
const Stack = require('../stacks.js');

describe('queues methods', () => {
  it('can successfully enqueue into a queue', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    expect(testQ.front).toEqual(1);
  });

  it('can succesfully enqueue() multiple nodes onto queue', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    testQ.enqueue(3);
    expect(testQ.length).toEqual(3);
  });

  it('can succesfully dequeue() off a queue', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    testQ.enqueue(3);
    testQ.dequeue();
    expect(testQ.length).toEqual(2);
  });

  it('can empty a queue after multople dequeue()s', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    testQ.enqueue(3);
    testQ.dequeue();
    testQ.dequeue();
    testQ.dequeue();
    expect(testQ.length).toEqual(0);
    expect(testQ.back).toBe(null);
  });

  it('can instaniate an empty queue', () => {
    let testQ = new Queue;
    expect(testQ.length).toEqual(0);
    expect(testQ.front).toBe(null);
  });

  it('can peek into a queue', () => {
    let testQ = new Queue;
    testQ.enqueue(1);
    testQ.enqueue(2);
    let peek = testQ.peek();
    expect(peek).toEqual(1);
  });

});

describe(' stacks', () => {
  it('can succesfully push() a single node to top of stack', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    expect(testStack.top).toEqual(2);
  });

  it('can succesfully push() multiple nodes onto stack', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    expect(testStack.length).toEqual(3);
  });

  it('can succesfully pop() off a stack', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.pop();
    expect(testStack.length).toEqual(2);
    expect(testStack.top).toEqual(2);

  });

  it('can empty a stack after multople pop()s', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    testStack.push(3);
    testStack.pop();
    testStack.pop();
    testStack.pop();
    expect(testStack.length).toEqual(0);
    expect(testStack.bottom).toBe(null);
  });

  it('can instaniate an empty stack', () => {
    let testStack = new Stack;
    console.log('stack', testStack);
    expect(testStack.length).toEqual(0);
    expect(testStack.bottom).toBe(null);
  });

  it('can peek into a stack', () => {
    let testStack = new Stack;
    testStack.push(1);
    testStack.push(2);
    let peek = testStack.peek();
    expect(peek).toEqual(2);
  });

});