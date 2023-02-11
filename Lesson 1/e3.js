// print out numbers from 1 to 100
// if number divisible by 3 print Fizz and if divisible by 5 print Buzz

// my solution
for(let i = 0; i< 101; i++ ){
    if(i % 3 == 0 && i % 5 !== 0){
        console.log("Fizz")
        continue
    }
    if((i % 5 == 0) && ( i % 3 !== 0)){
        console.log("Buzz")
        continue
    }
    if((i % 3 == 0 )&&(i % 5 === 0))
    { 
        console.log("FizzBuzz")
        continue
     }
    else{
    console.log(i)
    }
}

// teacher solution
for (let n = 1; n <= 100; n++) {
    let output = ""
    if (n % 3 == 0) output += "Fizz"
    if (n % 5 == 0) output += "Buzz"
    console.log(output || n)
}