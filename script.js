const ham = document.getElementById('ham')
const big_X = document.getElementById('big_X')
const mobile_Menu = document.getElementById('mobile-menu')
const darken = document.getElementById('darken-background')


ham.addEventListener("click", function(){
  mobile_Menu.style.display='flex'
  darken.style.display='block'
} );

big_X.addEventListener("click", function(){
    mobile_Menu.style.display='none'
    darken.style.display='none'
  } );