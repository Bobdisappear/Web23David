const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function addItem(evt) {
  evt.preventDefault();
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Inserta un producto");
    return;
  }
  //insertar un nuevo elemento en la lista
  createNewItem(newItem);
}

function createNewItem(item) {
  const li = document.createElement("li");
  li.className = "item";
  li.appendChild(document.createTextNode(item));

  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  //Vamos enlazando los elementos creados
  button.appendChild(icon);
  li.appendChild(button);

  //Añadir el li entero al ul de la lista
  itemList.appendChild(li);
}
//Evento de envio del formulario
itemForm.addEventListener("submit", addItem);

const clearBtn = document.querySelector("#clear");

function onClear() {
  const itemList = document.querySelector("ul");
  const items = document.querySelectorAll("li");
  //Limpiado burro
  //itemList.innerHTML = "";
  //items.forEach((item) => item.remove())
  
  while(itemList.firstChild){
    itemList.removeChild(itemList.firstChild)
  }


}

clearBtn.addEventListener("click", function () {
  const confirm = window.confirm("¿Estas seguro?");
  if (confirm) {
    onClear();
  }
});