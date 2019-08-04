'use strict';

class AnimalShelter {
  constructor() {
    // this.front = null;
    // this.rear = null;
    this.catqueue = [];
    this.dogqueue = [];

  }
  enqueue(animal) {
    if (animal !== 'cat' && animal !== 'dog'){
      console.log(`Not accepting ${animal}s at this time`) ;
    }
    else if (animal === 'cat') {
      this.catqueue.unshift(animal);
      // this.catrear = animal;
      console.log(this.catqueue);
    }
    else if (animal === 'dog') {
      this.dogqueue.unshift(animal);
      // this.dogrear = animal;
      console.log(this.dogqueue);
    }
    
  }
  
  dequeue(pref) {
    if (pref !== 'cat' && pref !== 'dog'){
      return null;
    }
    else if (pref === 'cat') {
      return this.catqueue.shift();
    }
    else if (pref === 'dog') {
      return this.dogqueue.shift();
    }
  }
  
  printCatQueue() { 
	var catStr = ""; 
	for(var i = 0; i < this.catqueue.length; i++){
		catStr += this.catqueue[i] +''; 
	  return catStr; 
  }
}




let myqQueue = new AnimalShelter();
myqQueue.enqueue('cat');
myqQueue.enqueue('cat');
myqQueue.enqueue('cat');
myqQueue.enqueue('cat');
myqQueue.enqueue('dog');
myqQueue.enqueue('monkey');
myqQueue.enqueue('dog');
myqQueue.enqueue('dog');
myqQueue.enqueue('dog');

console.log(myqQueue.dequeue('dog'));
console.log(myqQueue.dequeue('cat'));
console.log(myqQueue.printCatQueue());