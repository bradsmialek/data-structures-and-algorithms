'use strict';


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.queue = [];

  }
  enqueue(value) {
    this.queue.push(value);
    this.rear = value;
  }
  dequeue() {
    return this.queue.shift();
  }
  peek(){
    return this.queue[0];
  }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue.queue);
console.log(myQueue.dequeue());
console.log(myQueue.peek());


module.exports = Queue;
