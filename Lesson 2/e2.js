// ----------------------- Flattening
/* 
Use the reduce method to “flatten” an array of arrays into 
a single array that has all the elements of the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6]]


const array = arrays.reduce((flat, current) => [...flat, ...current], [])
// reduce function produces a single values so you need an empty array at the end
//...flat and ...currect is a spread operater, expands arrays into invididual elements
// 
console.log(array)

// → [1, 2, 3, 4, 5, 6]