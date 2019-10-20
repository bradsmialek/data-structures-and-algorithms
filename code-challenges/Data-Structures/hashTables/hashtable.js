'use strict';

// debugger;

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for( let i = 0 ; i < key.length ; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.map.length;
    }
    // console.log('hash',hash);
    return hash;

    // return key.split('').reduce( (acc,val) => {
    //   return acc + val.charCodeAt(0)
    // }, 0) * 599 % this.size;
  }

  set(key,value) {
    let hashValue = this.hash(key);
    if( !this.map[hashValue]) { this.map[hashValue] = []; }
    this.map[hashValue].push({[key]: value} ); // this.map[hashValue].push( {[key]: value} );
    console.log(this.map);
    return this.map;
  }

  has(key) {
    let hashKey = this.hash(key);
    for(let i=0; i<this.map[hashKey].length; i++) {
      if( this.map[hashKey][i][key] ) { return true;}
    }
    return false;
  }


  get(key) {
    // debugger;
    let hashKey = this.hash(key);
    console.log(hashKey)
    const currentBucket = this.map[hashKey];
    
    if (currentBucket) {
      for ( let obj in currentBucket){

        let keyValue = Object.keys(currentBucket[obj])
        console.log('keyvalue',keyValue[0])
        console.log('here',Object.keys(currentBucket[obj]), [key])
        console.log(Object.keys(currentBucket[obj]) === [key])
        if ( keyValue[0] === key) {
          // console.log('true')
          // console.log(currentBucket[0][key])
          return currentBucket[obj][key]
        }
      }
    }
    return undefined;
  }

}

let map = new HashMap(25);
map.set('Brad', '228-596-8681');
map.set('Jim', '123-456-9999');
map.set('Jonah', 'whatever');
map.set('Zachary', 'Zachary Smialek');
map.set('x', 'x');
map.set('acc', 'acc');
map.set('b', 'Jx');
map.set('d', 'Jxdfd');
map.set('foo', 'sdfasdf');
map.set('far', 'fdsfd');
map.set('adsfljds', 'xill');

map.get('foo')

// map.hash('brad');
// map.hash('yo');

// console.log(map.has('far'));

// console.log(map);


