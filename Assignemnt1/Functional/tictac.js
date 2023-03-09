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