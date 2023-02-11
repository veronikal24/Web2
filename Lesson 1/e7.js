/* The arity of a function is the number of arguments it requires. 
Currying a function means to convert a function of N arity into N functions of arity 1. 
In other words, it restructures a function so it takes one argument, then returns another 
function that takes the next argument, and so on. This is useful in your program if you can't supply 
all the arguments to a function at one time. You can save each function call into a variable, 
which will hold the returned function reference that takes the next argument when it's available. */


/*
function range(start, end)
{
    if(end === undefined) end => range(start, end)
    let array = []
    function range(end){
        for(let i = start; i < end +1; i++) {
        array.push(i)
    }
    return array   }
    return array
}
*/
function range(start, end) {
    if (end === undefined) return end => range(start, end)
    let array = []
    for (let i = start; i <= end+1; i ++) array.push(i)
    return array
}
let  add5 = range(5);
console.log(add5(3)); // 8

// teacher solution
function range(start, end, step = start < end ? 1 : -1) {
    if (end === undefined) return end => range(start, end)
    let array = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i)
    } else {
        for (let i = start; i >= end; i += step) array.push(i)
    }
    return array
}
