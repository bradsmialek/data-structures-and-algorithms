'use strict';
debugger;


function findRepeat(str) {
  if(typeof str !== 'string'){
    console.log(typeof str)
    return;
  }
  let splitStr = str.split(' ');
  console.log(splitStr)
  let wordsChecked = {};
  for (let i = 0; i < splitStr.length; ++i) {
    let duplicate = splitStr[i];
    if (duplicate in wordsChecked) {
      return splitStr[i];
    }
    wordsChecked[duplicate] = true;
  }
  return false;
}

findRepeat('hi , how are you?');
findRepeat(6);

module.exports = findRepeat;


// function split(str){
// 	var stringArray = [];
  
//   for(let i=0;i<str.length;i++){
//   	stringArray.push(str[i]);
//   }
//   return stringArray;
// }