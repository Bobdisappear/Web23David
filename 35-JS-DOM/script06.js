

// //mirar .replace e intentar una funcion


// function removeClearButton(){
//     const clearBtn = document.getElementById('clear')
//     clearBtn.remove();
// }


// function removeFirstChildren() {
//     const ul = document.querySelector("li:first-child")
//     ul.remove()
// }


// function removeFirstChildren() {
//     const ul = document.querySelector("ul")
//     const li = document.querySelector("li:first-child")
//     ul.removeChild(li)
// }


// function removeFirstChildren(itemNumber) {
//     const ul = document.querySelector("ul")
//     const li = document.querySelector(`li:nth-child(${itemNumber})`)
//     ul.removeChild(li)
// }



// const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber -1].remove();

// removeItem4(2)


// Añadir item
function addNewItem(){
const add = document.getElementById('add')
const value = document.getElementById(('item-input'))

add.addEventListener('click', addItem =>{

        const ul = document.querySelector('.items')
        const li = document.createElement('li');
        li.className = 'item'
        li.textContent = value.value;
        const btn = document.createElement('button')
        btn.className = 'remove-item btn-link text-red'
        const i = document.createElement('i');
        i.className = 'fa-solid fa-xmark'
        const thirdItem = document.querySelector('li:nth-child(3)')
        ul.insertBefore(li,thirdItem)

        ul.appendChild(li)
        li.appendChild(btn)
        btn.appendChild(i)

        const newBtnRed = document.querySelectorAll('.remove-item')

        newBtnRed.forEach((item)=>{
        item.addEventListener('click',() =>{
        item.parentElement.remove()

    })  
})

return addItem
})  
}
addNewItem();

//Recorrer array de li y guardarlos

const ArrayList = []
const liList = document.querySelectorAll("li")
liList.forEach((arrayLi) =>{
    ArrayList.push(arrayLi)
    return
})

//auque me genere li dentro de elements estos no los reconoce. solo recorre los predefinidos (temporales?)

//Seleccionar boton y remover lista
const btn = document.getElementById('clear')

btn.addEventListener('click',() =>{

    const li = document.querySelectorAll("li")
    li.forEach((list) =>{
        
        list.remove()
    })
    return 
})  


//Remover un solo boton recorriendo la lista para no perder 'ul'

const btnRed = document.querySelectorAll('.remove-item')

btnRed.forEach((item)=>{
    item.addEventListener('click',removeParent =>{

    item.parentElement.remove()
    
    return removeParent
})  
})


