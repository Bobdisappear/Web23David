

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
        ul.insertBefore(li, thirdItem)

        ul.appendChild(li)
        li.appendChild(btn)
        btn.appendChild(i)

        const newBtnRed = document.querySelectorAll('.remove-item')

        newBtnRed.forEach((item)=>{
        item.addEventListener('click',removeParent =>{
        item.parentElement.remove()

    return removeParent
})  
})
        
    return addItem
})  
}
addNewItem();
    


//Seleccionar boton y remover lista
const btn = document.getElementById('clear')

btn.addEventListener('click',removeList =>{

    const ul = document.querySelector("ul")
    const li = document.querySelector("li")
    ul.remove(li)

    return removeList
    
})  

//Remover un solo boton

const btnRed = document.querySelectorAll('.remove-item')

btnRed.forEach((item)=>{
    item.addEventListener('click',removeParent =>{

    item.parentElement.remove()
    
    return removeParent
})  
})




 createNewToRemoveLis()

const div = document.querySelector('filter')
const ulB = document.createElement('ul')
div.appendChild(ulB)