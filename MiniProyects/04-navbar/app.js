// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class



//Traer el boton
const btn = document.querySelector('.nav-toggle')
const menu = document.querySelector('.links')

//Al clicar en btn añadimos la clase show-links

btn.addEventListener('click', function(){
    if (menu.classList.contains('show-links')){
    menu.classList.add('show-links')
}else{
    menu.classList.remove('show-links')
}
})

// Es lo mismo( toogle funciona como boton, haciendo boolean)

btn.addEventListener('click', function(){
menu.classList.toggle('show-links')
})