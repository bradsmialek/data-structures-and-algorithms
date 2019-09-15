'use strict';

function insertionSort(arr){

  for(let i = 1 ; i < arr.length ; i++){
    
    let j = i - 1;
    
    let temp = arr[i];
    
    while( j >= 0 && temp < arr[j]){
      arr[j + 1] = arr[j];
      j = j - 1;
      
    }
    arr[j + 1] = temp;
  }
  return arr;
}

// insertionSort([8,7,6,5,4,3,2,1]);

module.exports = insertionSort;
