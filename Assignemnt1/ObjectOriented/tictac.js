

// Target all clicks on any element
document.addEventListener('click',(e) =>
  {
    // Get element class(es)
    let elementClass = e.target.className;
    // If element has class(es)
    if (elementClass !== '') {
      console.log(elementClass);
   
      document.getElementsByClassName(elementClass)[0].innerHTML = 'X';
    }
    // If element has no classes
    else {
      console.log('An element without a class was clicked');
    }
  }
);