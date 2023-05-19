
//Traer el boton
const tooglebtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')



// toogle funciona como boton, haciendo boolean)

tooglebtn.addEventListener('click', function(){
sidebar.classList.toggle('show-sidebar')
})
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
    })