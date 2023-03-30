// --------- ALPHABETICAL SORTING -------------------------

// The sort method sorts the elements of an array according to an optional callback function:
const numbers = [1, 5, 2, 3, 4]

numbers.sort((a, b) => a - b)
                    //   If a - b is a negative number, a will be sorted before b. 
                    //   If a - b is a positive number,
                    //   b will be sorted before a. If a - b is zero, 
                    //   a and b will remain in their relative positions.

console.log(numbers)
// → [1, 2, 3, 4, 5]

function alphabeticalOrder(array) {
   return[...array].sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
   /*
   In JavaScript, you can compare letters using their Unicode character codes, 
    which are numbers that represent each character in the Unicode standard.
    In this example, the charCodeAt() method returns the character 
    code for the letter "A", which is 65, and the character code for the letter "B", which is 66.

    To compare two letters, you can use the standard comparison operators (<, <=, >, >=) 
    with their character codes. For example:

    THIS is CASE Sensitive 
   */

}

const letters = ["a", "d", "c", "a", "z", "g"]

console.log(alphabeticalOrder(letters))
// → ["a", "a", "c", "d", "g", "z"]
console.log(letters)
// → [ "a", "d", "c", "a", "z", "g"]