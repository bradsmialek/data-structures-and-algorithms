'use strict';

function quickSort(arr){
  if (arr.length <1){
    return [];
  }
  let left =[];
  let right = [];
  let pivot = arr[0];

  for (let i =1; i< arr.length ; i++){
    if (arr[i] < pivot){
      left.push(arr[i]);

    }else{
      right.push(arr[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}
quickSort([7,6,3,7,2,-1])

module.exports = quickSort;
