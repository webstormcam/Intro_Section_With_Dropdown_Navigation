const ham = document.getElementById('ham')
const big_X = document.getElementById('big_X')
const mobile_Menu = document.getElementById('mobile-menu')
const darken = document.getElementById('darken-background')
let miniMenus = document.querySelectorAll('.small-drop-down');
const features = document.querySelector('.features');
const company = document.querySelector('.company')
const feature_drop = document.querySelector('.feature_drop')
const company_drop = document.querySelector('.company_drop')



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


features.addEventListener('click',function(){
  features.children[1].classList.toggle('drop-picked');
  feature_drop.classList.toggle('appear');



})


company.addEventListener('click',function(){
  company.children[1].classList.toggle('drop-picked');
  company_drop.classList.toggle('appear');



})

  


