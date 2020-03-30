
  var myIndex = 0;       
  carousel();
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
   
    for (i = 0; i < x.length; i++) {   
      x[i].classList.remove('animated', 'rotateOutDownLeft', 'rotateInDownLeft');       
      x[i].style.display = "none"; 
    }
   
    myIndex++;              
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    
    x[myIndex-1].classList.add('animated', 'rotateInDownLeft');
    x[myIndex-1].addEventListener('animationend', () => {
      setTimeout(() => x[myIndex-1].classList.add('animated', 'rotateOutDownLeft'), 2000);
      
  });         
  }
  setInterval(carousel, 4000);   