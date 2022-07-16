const ham = document.getElementById('ham')


ham.addEventListener("click", function(){
  

if(ham.getAttribute('src') ==='imgs/icon-menu.svg'){
    ham.src='imgs/icon-close-menu.svg'
 
} else if(ham.getAttribute('src')==='imgs/icon-close-menu.svg'){
    ham.src='imgs/icon-menu.svg'
}
    


 
 
} );