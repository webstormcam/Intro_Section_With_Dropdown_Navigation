const ham = document.getElementById('ham')
const big_X = document.getElementById('big_X')
const mobile_Menu = document.getElementById('mobile-menu')
const darken = document.getElementById('darken-background')
let miniDrop = document.querySelectorAll('.drop-down');
let cat = document.getElementById('cat');


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



  for(let i=0;i<miniDrop.length;i++){
    miniDrop[i].addEventListener('click', handleClick);
    function handleClick(e){
        let el = e.currentTarget;
      if( el.children[1].classList.contains('drop-picked')){
            el.children[1].classList.remove('drop-picked');
            cat.style.display='none';
          
            console.log('hello')
           
          
            
        } else{
            el.children[1].classList.add('drop-picked');
            cat.style.display='block';
          
           
           
        }
        for(let q=0;q<miniDrop.length;q++){
            if(miniDrop[q]!==el){
              miniDrop[q].children[1].classList.remove('drop-picked');
             
            }
        }



    }
        
     
     

    
}