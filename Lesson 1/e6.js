// elegant way to compute sum of a range numbrs

function range(start, end){
    array = []
    for(let i = start; i < end +1; i++) {
        array.push(i)
    }
    return array
}

function sum(array){
    count = 0
    for(let value of array){
        count += value
    }
    
    return count
}
console.log(range(1, 10))
console.log(sum(range(1, 10)))