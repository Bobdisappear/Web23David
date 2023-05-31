
// Confirm(tipo alert) pero devuelve True o False

clearButton.addEventListener('click', () =>{
  const confirm = window.confirm("¿Estas seguro?");
  if(confirm){
    clear();
  }
})

// Limpiar Todo

const clearButton = document.querySelector('#clear')

function clear(){
    
    const items = document.querySelectorAll('li');
    items.forEach((item) => item.remove())

}

const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')

// Añadir item

function addItem(evt){
    evt.preventDefault();  //previene el envio del formulario(submit)

    const newItem = itemInput.value;
    if(newItem === ""){
        alert("No has puesto nada nigga")
    }
    
}

//Evento de envio del formulario

itemForm.addEventListener('submit', addItem)