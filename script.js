const ham = document.getElementById('ham')
const big_X = document.getElementById('big_X')
const mobile_Menu = document.getElementById('mobile-menu')
const darken = document.getElementById('darken-background')
let miniDrop = document.querySelectorAll('.clickable');
let miniMenus = document.querySelectorAll('.small-drop-down');



ham.addEventListener("click", function(){
  if(mobile_Menu.classList.contains('animate__fadeOutRight')){
    mobile_Menu.classList.remove('animate__fadeOutRight')
    darken.classList.remove('animate__fadeOut')
  }
    mobile_Menu.style.display='flex'
  mobile_Menu.classList.add('animate__fadeInRight')
  darken.style.display='block'
darken.classList.add('animate__fadeIn')


} );

big_X.addEventListener("click", function(){
  mobile_Menu.classList.remove('animate__fadeInRight')
  darken.classList.remove('animate__fadeIn')
  mobile_Menu.classList.add('animate__fadeOutRight')
  darken.classList.add('animate__fadeOut')
  

  setTimeout(() => {
    noDark()
  }, 700);
    
  } );


  function noDark(){
    darken.style.display='none'
  }

  
  

  

