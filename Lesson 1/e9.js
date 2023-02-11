

// Your code here.
function arrayToList(array){
    list = {}
    for (let i = 0; i <= array.length +1; i++){
       list["Item"+i] = array.pop()
    }
    return list

}
// Your code here.
function listToArray(list){
    array= []
    for (let i = 0; i <= list.length +1; i++){
      array.push(list[i])
    }
    return list

}

function prepend(value, list) {
    return { value, rest: list }
}

function nth(list, n) {
    if (!list) return undefined
    else if (n == 0) return list.value
    else return nth(list.rest, n - 1)
}

console.log(listToArray(arrayToList([10, 20, 30])))
console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}

