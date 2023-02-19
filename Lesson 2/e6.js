//------ SOMETHING ------------/'

/*

The some method works with arrays to check if any element 
passes a particular test. It returns a Boolean value - true if any of the 
values meet the criteria, false if not.
Use the some method inside the checkPositive function to check if 
any element in the array is positive. The function should return a Boolean value.

*/
function checkPositive(array) {
    return array.some(x => x > 0)
}

console.log(checkPositive([1, 2, 3, -4, 5]))
// → true