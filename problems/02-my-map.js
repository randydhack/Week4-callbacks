/*******************************************************************************
Write a function `myMap` that accepts an array and a callback as arguments.
The function return an array of new elements obtained by calling the callback on
each element of the array, passing in the element.

Do not use the built in Array.map

// Examples

let result1 = myMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

let result2 = myMap(['run', 'Forrest'], function (el) {
    return el.toUpperCase() + '!';
});
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

1. for loop that iterates from 0 to length of arr
2. declare a var of ele and init to arr[i]
3. declare var res with the value of cb passing in arg of el
4. return res
*******************************************************************************/

function myMap(array, cb) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        let res = cb(ele);
        newArr.push(res);
    }
    return newArr;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = myMap;
} catch(e) {
    return null;
}
