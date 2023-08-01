

const iconHambuer = document.querySelector('.iconHamburger');
const iconClose = document.querySelector('.iconClose');
const sideBar = document.querySelector('.sidebar');



iconHambuer.addEventListener('click', OpenMenu);
iconClose.addEventListener('click', CloseMenu);

function OpenMenu(){
    sideBar.classList.toggle('showSidebar');
}

function CloseMenu(){
    sideBar.classList.remove('showSidebar');
}