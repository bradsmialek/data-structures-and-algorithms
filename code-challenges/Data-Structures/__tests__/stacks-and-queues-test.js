// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue

'use strict'

const AnimalQ = require('./fifo-animal-shelter.js');

describe('Queue with stacks tests', () => {
  it('can enqueue things', () => {
    let qs = new AnimalQ;
    qs.enqueue(5);
    qs.enqueue(10);
    qs.enqueue(15);
    qs.enqueue(20);
    expect(qs.stack1.top.value).toBe(20)
  });

  it('can dequeue things', () => {
    let qs = new AnimalQ;
    qs.enqueue(5);
    qs.enqueue(10);
    qs.enqueue(15);
    qs.enqueue(20);
    expect(qs.dequeue()).toBe(5)
  });

})