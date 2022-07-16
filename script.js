const ham = document.getElementById('ham')
const big_X = document.getElementById('big_X')
const mobile_Menu = document.getElementById('mobile-menu')


ham.addEventListener("click", function(){
  mobile_Menu.style.display='flex'
} );

big_X.addEventListener("click", function(){
    mobile_Menu.style.display='none'
  } );