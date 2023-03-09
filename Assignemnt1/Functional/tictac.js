count = 0
valid_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Target all clicks on any element
let player1 = [];
let player2 = [];
document.addEventListener('click', (e) => { click_handle(e) })

function click_handle(e){
    let elementClass = e.target.className
    if (elementClass !== '') {
        if(valid_array.includes(Number(elementClass))){
        count++;
        make_move(count, e)
        }
  }
    if (elementClass === 'reset') {
    reset()
    count = 0
    }
}
function make_move(count, e){
   
    if(count % 2 === 0){
          futher_move(count, e, player1, "X", "O");
          console.log("I am clicking for X");
    }
    else
          futher_move(count, e, player2, "O", "X")
          console.log("I am clicking for O")
        
    count++
}
function futher_move(count, e, player, name, nextname)
{
    if(!player1.includes(e.target.className) || !player2.includes(e.target.className)){    // you cannot click on the same element twice and get points for that
        player.push(e.target.className)
         }
    console.log(player)
    document.getElementsByClassName(e.target.className)[0].innerHTML = name
    document.getElementById("messagebox").innerHTML = "Next TURN: "+ nextname;
    if(!check_if_you_won(player, name, count)) return player
}
function check_if_you_won(player, name, count){
    won = false
    winning_combos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[7,5,3]]
    player = player.map(Number);
    let changing_set = new Set(player);
    
          // Loop through the winning combos and see if they match the changing array
    for (let i = 0; i < winning_combos.length; i++) {
      let combo = winning_combos[i];
    
      if (combo.every(num => [...changing_set].includes(num))) {
        document.getElementById("messagebox").innerHTML = "One match Found for :" + name;
        //combo.forEach(x => document.getElementsByClassName(x)[0].style.textDecoration = "line-through")
        document.getElementsByClassName(name)[0].innerHTML = Number(document.getElementsByClassName(name)[0].innerHTML) + 1
        document.getElementById("messagebox").innerHTML = "GAME OVER: "+ name +" won";
        alert("GAME OVER: "+ name+" won")
        won = true
    }
      }
      if(count === 9 && !won) alert("GAME OVER: You both SUCK AT THIS GAME")
      return won;
    }
function reset(){
    valid_array.forEach(x => document.getElementsByClassName(x)[0].innerHTML = "");
    player1 = [];
    player2 = [];
    count = 0;
    document.getElementsByClassName("X")[0].innerHTML = "" 
    document.getElementsByClassName("O")[0].innerHTML = "" 
    document.getElementById("messagebox").innerHTML = ""

    
}
