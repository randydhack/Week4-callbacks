/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/
/*
declare an empty data type (undefined)
use a for loop from 0 to n
  call the cb with value as an arg which reassigns the current value
  store the value to the empty data type
return result
*/


function multiMap(val, n, cb) {
  // Your code here
  let res;

  for (let i = 0; i < n; i++) {
    val = cb(val);
  }
  return val
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch(e) {
  return null;
}
