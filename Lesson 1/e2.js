// write a loop that makes seven calls to console.log to output following trainge
/*#
 ##
 ###
 ####
 #####
 ######
 #######
*/
function triagle(){
    for (let i = 0; i < 8; i++) {
        output = ""
    for (let z = 0; z < i; z++){
       output = output + "#"
      }
    console.log(output)
}
}
console.log(triagle())
