/*******************************************************************************
Write a function `mySimpleReduce` that accepts an array and a callback as arguments.
The function should mimic the behavior of the built in Array.reduce, utilizing the
first element of the array as the default accumulator.

In other words, the function should begin with the first element of the array as
the accumulator and call the callback for each of the remaining elements in the array,
passing in the current accumulator and current element into the callback. Upon calling the callback,
the accumulator should be set to the result of the callback.

Examples:

let result1 = mySimpleReduce([5, 3, 2, 4], function(sum, el) {
    return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function(product, el) {
    return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function(max, el) {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});
console.log(result3); // 8

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would refactor this problem to take in an
  optional initial accumulator
*******************************************************************************/

function mySimpleReduce(array, cb) {
  // Your code here
  let previous = array[0];

  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    previous = cb(previous, current);
  }
  return previous;

  // let total = 0; // total comes here
  // let prev = array[0]; // set the first value at index 0 so u can add the next index inside the loop

  // for (let i = 1; i < array.length; i++) { // start loop from index 1 so u can add prev
  //   let curr = array[i]; // set curr value at index i
  //   prev = cb(prev,curr); // array[0] = cb(array[0],array[i]) -> [5, 3, 2, 4] -> 5+3 -> 8+2 -> 10+4
  //   // reassign prev to sum every time u iterate --> total = 8, 10, 14
  // }
  // return prev; // return total
}

//  let res =  array.reduce(function(el, i, array){
//     cb(el, currentValue);
//   });
//   console.log(res)
//   // return res;
// }

let result1 = mySimpleReduce([5, 3, 2, 4], function (sum, el) {
  return sum + el;
});
console.log(result1); // 14

let result2 = mySimpleReduce([4, 6, 2], function (product, el) {
  return product * el;
});
console.log(result2); // 48

let result3 = mySimpleReduce([4, 6, 2, 8, 3], function (max, el) {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(result3); // 8

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = mySimpleReduce;
} catch (e) {
  return null;
}
