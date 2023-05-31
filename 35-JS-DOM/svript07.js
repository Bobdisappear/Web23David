


const ArrayList = []


//Recorrido arrayList
const liList = document.querySelectorAll("li")
liList.forEach((arrayLi) => {
    ArrayList.push(arrayLi)
    return
})

//Carga del documento con las funciones
window.addEventListener("DOMContentLoaded", () => {
    addNewItem();
  });



  function addNewItem() {
    const add = document.getElementById('add')
    const value = document.getElementById(('item-input'))

    add.addEventListener('click', () => {

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

        newBtnRed.forEach((item) => {
            item.addEventListener('click', () => {
                item.parentElement.remove()

            })


        })

        ArrayList.push(li) 
    })
}
