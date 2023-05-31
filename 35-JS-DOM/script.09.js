

const btnClearList = document.getElementById('clear');
const liSelector = document.querySelectorAll('.item');
const btnRemove = document.querySelectorAll('.remove-item');
const btnAddItem = document.querySelector('.btn')
const addInputItem = document.querySelector('.form-input')
const headList = document.querySelector('.items')
const thirdItem = document.querySelector('li:nth-child(3)')

// Limpiar lista

btnClearList.addEventListener('click', ()=>{
    liSelector.remove();
})

// Limpiar individuales

btnRemove.forEach(() =>{
    addEventListener('click', () =>{
        liSelector.remove
    })
})

// Crear item

function createItem(){
   const liCreate = document.createElement('li').className('item')
   const btnCreate = document.createElement('button').className('remove-item btn-link text-red')

    liCreate.appendChild(btnCreate)
}
//  Añadir Item
function addNewItem(){
    btnAddItem.addEventListener('click', () =>{  
        headList.insertBefore ((createItem(addInputItem.contains)), thirdItem)
    })
}
addNewItem();


