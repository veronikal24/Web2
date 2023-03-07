

// Target all clicks on any element
document.addEventListener('click',(e) =>
  {
    // Get element class(es)
    let elementClass = e.target.className;
    // If element has class(es)
    if (elementClass !== '') {
      console.log(elementClass);
      game.movement(game.player1, elementClass)
      document.getElementsByClassName(elementClass)[0].innerHTML = 'X';
    }
    // If element has no classes
    else {
      console.log('An element without a class was clicked');
    }
  }
);

const game = {
  name: "Tick-Tack-Toe",
  player1: [],
  player2: [],
  description : function() {
    return this.name + " " + this.player1 + " " + this.player2;
  },
  movement: function(player1, x){
        console.log(...player1)
        return  player1.push(x)

  }
};
console.log(game.description)