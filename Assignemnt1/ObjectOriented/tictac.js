
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
  })
  
const game = {
  name: "Tick-Tack-Toe",
  player1: [],
  player2: [],
  movement: function(player, x,name){
  
      
        winning_combos = [[1,4,7],[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]]
        if(!player.includes(x)){    // you cannot click on the same element twice and get points for that
             player.push(x)
              }
        console.log(...player, name)
        player = player.map(Number);
        let changing_set = new Set(player);
        
              // Loop through the winning combos and see if they match the changing array
        for (let i = 0; i < winning_combos.length; i++) {
          let combo = winning_combos[i];
          console.log(combo)
          if (combo.every(num => [...changing_set].includes(num))) {
            document.getElementsByClassName(name)[0].innerHTML = Number(document.getElementsByClassName(name)[0].innerHTML) + 1
            this.player= []
            document.getElementById("messagebox").innerHTML = "GAME OVER:" +name+ "won";
            alert("GAME OVER:" +name+ "won")
            game.reset()
            break;
          }
         
        }
        return player
  },
  turn: function(count, x){
            if(count === 9)
            {
            document.getElementsByClassName(x)[0].innerHTML = "O"
            this.movement(this.player2, x, "O")
            if((Number(document.getElementsByClassName("X")[0].innerHTML) 
            + Number(document.getElementsByClassName("O")[0].innerHTML)) === 0 ){
              document.getElementById("messagebox").innerHTML = "GAME OVER: Nobody won";
              alert("GAME OVER: Nobody Won")
              game.reset()
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
    count = 0;
    document.getElementsByClassName("X")[0].innerHTML = "" 
    document.getElementsByClassName("O")[0].innerHTML = "" 
    document.getElementById("messagebox").innerHTML = ""
 
  }
};
