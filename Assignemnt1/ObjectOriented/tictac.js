
count = 0
valid_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Target all clicks on any element

document.addEventListener('click',(e) =>
  {
    // Get element class(es)
    let elementClass = e.target.className;
    // If element has class(es)
    if (elementClass !== '') {
      if(valid_array.includes(Number(elementClass))){
      count++;
      game.turn(count, elementClass);
      }
    }
    if (elementClass === 'reset') {
      game.reset()
      count = 0
    }
    // If element has no classes
    else {
      console.log('An element without a class was clicked');
    }

  })
  
const game = {
  name: "Tick-Tack-Toe",
  player1: [],
  player2: [],

  description : function() {
    return this.name + " " + this.player1 + " " + this.player2;
  },
  movement: function(player, x,name){
        console.log(...player)
      
        winning_combos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9],[7,5,3]]
        if(!player.includes(x)){    // you cannot click on the same element twice and get points for that
             player.push(x)
         
              }
        player = player.map(Number);
        let changing_set = new Set(player);
        
              // Loop through the winning combos and see if they match the changing array
        for (let i = 0; i < winning_combos.length; i++) {
          let combo = winning_combos[i];
        
          if (changing_set.size >=new Set(combo).size && 
              [...changing_set].every(num => combo.includes(num))) {
            document.getElementById("messagebox").innerHTML = "One match Found for :" + name;
            combo.forEach(x => document.getElementsByClassName(x)[0].style.textDecoration = "line-through")
            document.getElementsByClassName(name)[0].innerHTML = Number(document.getElementsByClassName(name)[0].innerHTML) + 1
            winning_combos.splice(i, 1);
            this.player= []
              if(document.getElementsByClassName("X")[0].innerHTML > 
            document.getElementsByClassName("O")[0].innerHTML ||document.getElementsByClassName("X")[0].innerHTML === 
            document.getElementsByClassName("O")[0].innerHTML  ){
            document.getElementById("messagebox").innerHTML = "GAME OVER: X won";
            alert("GAME OVER: X won")}
            else if((Number(document.getElementsByClassName("X")[0].innerHTML) 
            + Number(document.getElementsByClassName("O")[0].innerHTML)) === 0 ){
              document.getElementById("messagebox").innerHTML = "GAME OVER: Nobody won";
              alert("GAME OVER: Nobody Won")
            }
            else{
              document.getElementById("messagebox").innerHTML = "GAME OVER: O won";
              alert("GAME OVER: O won")
            }
            break;
          }
        }
        return player

  },
  turn: function(count, x){
            console.log(count)
            if(count === 9)
            {
            console.log( "I am in 9")
            document.getElementsByClassName(x)[0].innerHTML = "O"
            this.movement(this.player2, x, "O")
            if((Number(document.getElementsByClassName("X")[0].innerHTML) 
            + Number(document.getElementsByClassName("O")[0].innerHTML)) === 0 ){
              document.getElementById("messagebox").innerHTML = "GAME OVER: Nobody won";
              alert("GAME OVER: Nobody Won")
              this.reset()
            }
          }
            else if( count % 2 === 0){
              document.getElementsByClassName(x)[0].innerHTML = "X"
              this.movement(this.player1, x, "X")
              document.getElementById("messagebox").innerHTML = "Next TURN: O";
              return "X"
          }
          else if(count < 10){
            document.getElementsByClassName(x)[0].innerHTML = "O"
            this.movement(this.player2, x, "O")
            document.getElementById("messagebox").innerHTML = "Next TURN: X";
              return "O"
            }

          },
  reset: function(){
    valid_array.forEach(x => document.getElementsByClassName(x)[0].innerHTML = "");
    this.player1 = [];
    this.player2 = [];
    this.count = 0;
    document.getElementsByClassName("X")[0].innerHTML = "" 
    document.getElementsByClassName("O")[0].innerHTML = "" 
    document.getElementById("messagebox").innerHTML = ""
  }
};
console.log(game.description)