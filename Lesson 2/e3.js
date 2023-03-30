// ---------- YOUR OWN LOOP

/* 

Write a higher-order function loop that provides something like 
a for loop statement. It takes a value, a test function, an update function, 
and a body function. Each iteration, it first runs the test function on the 
urrent loop value and stops if that returns false. Then it calls the body function, 
giving it the current value. Finally, it calls the update function to create a new value a
nd starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.

*/

function loop(value, testfunct, updatefunc, bodyfunc) {
    //this function allows you to specify how many itterations you need ---value
    // then what is the condition that you have to comply to --- testfunct
    // then what should be done in the next part with the value --- updatefunc
            //3              //3  > 0     // i = 3 - 1
        for(let i = value; testfunct(i); i = updatefunc(i)){
            bodyfunc(i)
        }
}

loop(
    3,
    n => n > 0,
    n => n - 1,
    console.log
)
// → 3
// → 2
// → 1