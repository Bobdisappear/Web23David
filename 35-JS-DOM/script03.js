
// DOM
//Selectores de un elemento simple

let out;

out = document.getElementById("app-title")

//Obtener valor de atributos

out = document.getElementById("app-title").id;
out = document.getElementById("app-title").className = "test";
out = document.getElementById("app-title").getAttribute('id');

//Establecer atributos

out = document.getElementById("app-title").title = "Lista de la compra"
out = document.getElementById("app-title").setAttribute('class','title');

//GET/SET contenido

const title = out = document.getElementById("app-title");
title.textContent = "Hello World"
title.innerText = "Hello again "
title.innerHTML = "<em>Lista de la compra</em>"


//Cambiar estilos
title.style.color = "red";
title.style.backgroundColor = "#0DD";
title.style.padding = "10px";
title.style.borderRadius = "10px";

//usar selectores de CSS

out = document.querySelector('h1')
out = document.querySelector('#app-title')
out = document.querySelector('.container')
out = document.querySelector('input[type="text"]')
out = document.querySelector('li:nth-child(2)').innerText

const segundohijo = document.querySelector('li:nth-child(2)')
segundohijo.innerText = "Zumo de patata"
segundohijo.style.color = "red"


//Podemos usar estos metodos en otros elementos

const lista = document.querySelector('ul');
const primerItem = lista.querySelector('li') //Solo devuelve el primero que encuentra
lista.querySelectorAll('li') //Devielve todos

primerItem.style.color = "green"
lista.querySelector('li')





console.log(out);

