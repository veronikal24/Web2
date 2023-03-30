/* 
Create a pure function that returns a new array containing the squares of only the positive integers when an array of real numbers is passed to it.

Your function should not use any kind of for or while loops or the forEach method, but you may use any combination of map, filter and reduce.

*/

function squareList(arrays) {
    return arrays.filter(item => item > 0 && item % 1 === 0 ).map(item => item * item)
                          //get the item, check if it > 0 and not not with decimal point
                          //afterwards you map them into a new array where you store the squares 
    }
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
    // → [25, 9])

