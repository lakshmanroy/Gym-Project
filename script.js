let menu= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onClick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Typing text code

const typed = new Typed('.multiple-text', {
    strings: ['Physical fitness', 'Weight Gain','Streght Training','Fat Lose','Weight Lifting','Running'], 
    typeSpeed: 60,
    backSpeed: 60,
    backDelay:1000,
    loop:true,
  });