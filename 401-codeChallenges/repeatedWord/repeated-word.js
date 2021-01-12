'use strict';

function repeatedWords(str){

  //FUNCTION TO REMOVE SYMBOLS INSTEAD OF USING REGEX
  //function removeSymbol(symbol, str){
  //     let newString = "";
  //     for(var i = 0; i < str.length; i++) {
  //         var char = str.charAt(i);
  //         if(char != symbol){
  //             newString = newString + char;
  //         }
  //     }
  //     return newString.toLowerCase();
  // }
  let wordsArray = str.toLowerCase().split(/\W+/g);

  let hashtable = new Array(1024);

  for(let i of wordsArray){
    let index = hash(i);
    if(hashtable[index]){
      for(let k in hashtable[index]){
        if(hashtable[index][k] === i){
          return i;
        }
      }
      hashtable[index].push(i);
    } else {
      hashtable[index] = [i];
    }
  }
}

function hash(key){

  let num = 0;

  for (let char of key){
    num += char.charCodeAt(0);
  }

  const primed = num * 599;
  const index = primed % 1024;

  return index;
}

module.exports = repeatedWords;
