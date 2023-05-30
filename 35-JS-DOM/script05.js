

//Insert Elements contigua


function insertElement(){
    const filter = document.querySelector('.filter');
    const h1 = document.createElement('h1');

    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1)

}

//Insert text contiguo

function insertText(){
    const item = document.querySelector('li:first-child');
    
    item.insertAdjacentText('beforeend', 'insertAdjacentText')
}



//Insert HTML

function insertHtml(){
    const clearBtn = document.querySelector('#clear');
    clearBtn.insertAdjacentHTML('afterend',"<h2>Toy aquí</h2>")
}


//insertar antes

function insertBeforeItems(){
    const ul = document.querySelector('.items')
    const li = document.createElement('li');
    li.className = 'item'
    li.textContent = 'insertbeforeitems';
    const btn = document.createElement('button')
    btn.className = 'remove-item btn-link text-red'
    const i = document.createElement('i');
    i.className = 'fa-solid fa-xmark'
    const thirdItem = document.querySelector('li:nth-child(3)')
    ul.insertBefore(li, thirdItem)

    ul.appendChild(li)
    li.appendChild(btn)
    btn.appendChild(i)

}


//Funcion custom (insertAfter)(li,item) donde lo queremos insertar

function añadir(nombre){
    function insertAfter(element, padre){
        const posicion = document.querySelector(padre)
    
        const elemento = document.createElement(element)
    
        posicion.insertAdjacentElement('afterend', elemento)
    
        return elemento
    }
    
    const e = insertAfter("li", 'li:nth-child(2)')
    e.innerHTML = nombre
    }


//funcioncustom (Toni)
     //Coge al padre para insertar al hijo(metodo usado para eliminar hijos)

const li = document.createElement("li");
li.textContent = "insertamos el item"
const firstItem = document.querySelector("li:first-child");


function insertafter2(newElement2,exitingElement2){
    exitingElement2.parentElement.insertBefore(newElement2, exitingElement2.nextSibling)
}

insertafter2(li, firstItem)

