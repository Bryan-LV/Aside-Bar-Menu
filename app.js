let menuBtn = document.querySelector('.mobileLogo');
let sideMenu = document.querySelector('.asideBar');
let ul = document.querySelector('#asideBarMenu');

menuBtn.addEventListener('click',function(){
    sideMenu.classList.toggle('showAsideBar');
});

document.addEventListener('click',function(event){
    if(event.target !== sideMenu && event.target !== ul && event.target !== menuBtn){
        sideMenu.classList.remove('showAsideBar');
    }
});