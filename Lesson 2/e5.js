// -------------- FROM TITLE TO URL ------------------- //
/*

Many content management sites (CMS) have the titles of a post added to part
of the URL for simple bookmarking purposes. For example "Learn Functional
Programmin In JavaScript" would result in .../learn-functional-programming-in-javascript.

Fill in the pure function, urlSlug, so it converts a string title and returns the 
hyphenated version for the URL:

The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces
Are higher order functions useful here? Can you solve the exercise without them?

*/

function urlSlug(title) {
    return title.toLowerCase().replaceAll(' ', '-')
}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
// → a-mind-needs-books-like-a-sword-needs-a-whetstone

/**   TEACHER SOLUTION
 *   function urlSlug(title) {
     return title.toLowerCase().trim().split(" ").join("-")
}

 */

