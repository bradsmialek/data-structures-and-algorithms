'use strict';

const Queue = require('../queues.js');
const Stack = require('../stacks.js');

describe('queues test', () => {

  it('can succesfully enqueue', () => {
    let que = new Queue;
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    expect(Object.values(que)[2].length).toEqual(3);
  });

  it('can succesfully dequeue', () => {
    let que = new Queue;
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    que.dequeue();
    expect(Object.values(que)[2].length).toEqual(2);
  });

  it('can empty a que after multiple dequeue method calls', () => {
    let que = new Queue;
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    que.dequeue();
    que.dequeue();
    que.dequeue();
    expect(Object.values(que)[2].length).toEqual(0);
  });

  it('can instaniate an empty que', () => {
    let que = new Queue;
    expect(Object.values(que)[2].length).toEqual(0);
    expect(Object.values(que)[0]).toBe(null);
  });

  it('can peek', () => {
    let que = new Queue;
    que.enqueue(1);
    que.enqueue(2);
    let peek = que.peek();
    expect(peek).toEqual(1);
  });

});

describe('stacks test', () => {
  it('can push() a single node to top of stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(Object.values(stack)[0].value).toEqual(3);
  });

  it('can push() multiple nodes onto stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(Object.values(stack)[1].length).toEqual(3);
  });

  it('can pop() off a stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    console.log(Object.values(stack));
    expect(Object.values(stack)[1].length).toEqual(2);
    expect(stack.top.value).toEqual(2);

  });

  xit('can empty a stack after several pop calls', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.length).toEqual(0);
    expect(stack.bottom).toBe(null);
  });

  xit('can instaniate an empty stack', () => {
    let stack = new Stack;
    console.log('stack', stack);
    expect(stack.length).toEqual(0);
    expect(stack.bottom).toBe(null);
  });

  xit('can peek into a stack', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    let peek = stack.peek();
    expect(peek).toEqual(2);
  });

})
