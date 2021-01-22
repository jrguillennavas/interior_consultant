const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const closeBtn = document.getElementById('close')

const showHiddeMenu = () =>{
    if(navbar.style.transform === 'translateX(-100%)'){
        navbar.style.transform = 'translateX(0)'
    }else{
        navbar.style.transform = 'translateX(-100%)'
    }
}

window.onload = () =>{

    menu.addEventListener('click', showHiddeMenu)
    closeBtn.addEventListener('click', showHiddeMenu)

}