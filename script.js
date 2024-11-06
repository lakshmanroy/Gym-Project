let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle the menu icon and navbar active state on click
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Changes the menu icon to an "x" icon
    navbar.classList.toggle('active'); // Toggles the active class on navbar
}

// Remove the "x" icon and active class on scroll
window.onscroll = () => {
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