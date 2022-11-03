/*******************************************************************************
Write a function `reject` that accepts an array and callback as arguments. The
function should call the callback for each element of the array, passing in the
element. The function should return a new array
containing elements of the original array that result in false when given to the
callback.

Note that that you cannot use the Array `map` or `filter` methods to solve this
problem.

Examples:

let isEven = function(n) {
    return n % 2 === 0;
};
console.log(reject([7, 8, 5, 6, 12, 11], isEven)); // [ 7, 5, 11 ]

let hasA = function(s) {
    return s.toLowerCase().includes('a');
};
console.log(reject(['breadth', 'GRAPH', 'depth', 'height'], hasA)); // [ 'depth', 'height' ]

1. declare empty array called result
2. iterate through the array from 0 - .length
3. declare a var called el to array[i]
4. create and if statement using the cb(el)
5. negate the if statement
6. if answer is false, push the ele into empty arr
7. return res
*******************************************************************************/

function reject(array, cb) {

  let res = [];

  // for (let i = 0; i < array.length; i++) {
  //   let el = array[i];

  //   if (!cb(el)) {
  //     res.push(el);
  //   }
  // }

  array.forEach((e, i, arr) => { if (!cb(e, i, arr)) { res.push(e) }});

  return res;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = reject;
} catch(e) {
  return null;
}
