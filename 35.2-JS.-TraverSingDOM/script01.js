

let out;

//como obtener los elementos hijos de un padre

const parent = document.querySelector(".parent");

out = parent.children
out = parent.children[1].innerText; 
out = parent.children[1].className;
out = parent.children[1].innerText = "El sss";
out = parent.children[0].style.color = "red";


out = parent.firstElementChild.innerText = 'Primer hijo';
out = parent.lastElementChild.innerText = 'Tercer hijo';

//Podemos obtener el elemento padre del del hijo

const child = document.querySelector('.child')
out = child.parentElement.style.border = '2px solid #ccc'
out = child.parentElement.style.padding = '10px'

//Obtener los elementos hermanod (siblings)

const secondItem = document.querySelector('.child:nth-child(2)')
out = secondItem.innerHTML;
out = secondItem.nextElementSibling.style.color = 'green'
out = secondItem.previousElementSibling.style.color = 'orange'
console.log(child);
console.log(out);