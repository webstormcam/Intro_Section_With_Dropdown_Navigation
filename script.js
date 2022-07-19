const ham = document.getElementById('ham')
const big_X = document.getElementById('big_X')
const mobile_Menu = document.getElementById('mobile-menu')
const darken = document.getElementById('darken-background')


ham.addEventListener("click", function(){
  if(mobile_Menu.classList.contains('animate__fadeOutRight')){
    mobile_Menu.classList.remove('animate__fadeInRight')
  }
    mobile_Menu.style.display='flex'
  mobile_Menu.classList.add('animate__fadeInRight')
  darken.style.display='block'
darken.classList.add('animate__fadeIn')
darken.style.zIndex='2'

} );

big_X.addEventListener("click", function(){
  mobile_Menu.classList.remove('animate__fadeInRight')
  darken.classList.remove('animate__fadeIn')
  mobile_Menu.classList.add('animate__fadeOutRight')
  darken.classList.add('animate__fadeOut')
  darken.style.zIndex='-1'

    mobile_Menu.style.display='none'
    // darken.style.display='none'
  } );