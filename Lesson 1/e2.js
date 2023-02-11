// write a loop that makes seven calls to console.log to output following trainge


            https://github.com/KasperKnop/WEB2/blob/main/01%20Fundamentals/README.md


/*#
 ##
 ###
 ####
 #####
 ######
 #######
*
function triagle(){
    for (let i = 0; i < 8; i++) {
        output = ""
    for (let z = 0; z < i; z++){
       output = output + "#"
      }
    console.log(output)
}
} */
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line)
}

