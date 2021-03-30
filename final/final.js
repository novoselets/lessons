



var menu = document.querySelector('.java_logo');
console.log(menu)
var headerMenu = document.querySelector('.header_menu')
console.log(headerMenu)

let i = 0;

menu.onclick = function (){
    headerMenu.className = ' menu_open'
    headerMenu.style.opacity = '1'
    i++
    console.log(i)

    if(i>=2){
    headerMenu.style.opacity = '0'
        i=0
    }
}
