const menuBtn = document.querySelector('#menu-btn')
const sideBtn = document.querySelector('#side-btn')
const menuBar = document.querySelector('.menu-bar')
const sideMenu = document.querySelector('.side-menu-bar')


menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x')
    menuBar.classList.toggle('active')
}
sideBtn.onclick = () =>{
    sideBtn.classList.toggle('bx-x')
    sideMenu.classList.toggle('active-side-menu')
}

