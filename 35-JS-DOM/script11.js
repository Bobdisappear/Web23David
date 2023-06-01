//*--------ELEMENTOS------------
const listaItems = [];
const ul = document.createElement("ul");
ul.className = "items";
ul.id = "item-list";
const filtroInput = document.querySelector('.form-input-filter')
const resultados = document.querySelector(".ul")

//--BOTONES--
const add = document.querySelector(".btn");
const quitar = document.getElementsByClassName("remove-item");
const limpiar = document.querySelector("#clear");

//*---------FUNCIONES------------
function cargarItemsEjemplo() {
  const items = ["Manzanas", "Zumo de naranja", "Oreos", "Leche"];

  items.forEach((item) => {
    const divObjetivo = document.querySelector(".filter");

    const li = document.createElement("li");
    li.className = "item";
    li.textContent = item;

    const btnQuitar = document.createElement("button");
    btnQuitar.className = "remove-item btn-link text-red";
    btnQuitar.addEventListener("click", () => {
      li.remove();
      listaItems.pop();
    });

    const iconoQuitar = document.createElement("i");
    iconoQuitar.className = "fa-solid fa-xmark";

    btnQuitar.appendChild(iconoQuitar);
    li.appendChild(btnQuitar);
    ul.appendChild(li);

    divObjetivo.insertAdjacentElement("afterend", ul);

    listaItems.push(li);
    return listaItems;
  });

  //Cuando cargue la página, genera 4 items y añadirlos al array listaItems
  //Crear un array con los valores de los 4 items, por cada uno, crear un item
}

function añadirItem() {
  const divObjetivo = document.querySelector(".filter");
  const item = document.getElementById("item-input").value;
  if (document.getElementById("item-input").value === "") {
    return;
  } else {
    const li = document.createElement("li");
    li.className = "item";
    li.textContent = document.getElementById("item-input").value;

    const btnQuitar = document.createElement("button");
    btnQuitar.className = "remove-item btn-link text-red";
    btnQuitar.addEventListener("click", () => {
      li.remove();
      listaItems.pop();
    });
    const iconoQuitar = document.createElement("i");
    iconoQuitar.className = "fa-solid fa-xmark";

    btnQuitar.appendChild(iconoQuitar);
    li.appendChild(btnQuitar);
    ul.appendChild(li);

    divObjetivo.insertAdjacentElement("afterend", ul);

    listaItems.push(li);
    return listaItems;
  }
  //Crear un item
  //Añadir item al array listaItems
}

function limpiarLista() {
  limpiar.addEventListener("click", () => {
    li.remove();
  });
  //Eliminar todos los items del array listaItems
}

//-----------FILTRO-----------------

filtroInput.addEventListener('input', ()=>{
    const filtro = filtroInput.value.toLowerCase();

    listaItems.forEach((item)=>{
        if(item.textContent.toLowerCase().includes(filtro)){
            item.style.display = 'flex'
        }else{
            item.style.display = 'none'
        }
      
    })

    
})

//---OTROS-------
window.onload = cargarItemsEjemplo;

add.addEventListener("click", añadirItem);

limpiar.addEventListener("click", function () {
  const primer = document.querySelectorAll("li");
  primer.forEach(function (elemt) {
    elemt.remove();
    listaItems.pop();
  });
});