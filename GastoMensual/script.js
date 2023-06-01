

const inputGasto = document.getElementById('gasto');
const inputCantidad = document.getElementById('cantidad');
const btnCartera = document.querySelector('.btn');
const ulList = document.querySelector('.list')
const valuetxt = document.getElementById('gasto')
const valuenum = document.getElementById('cantidad')

function liCreate(){

    btnCartera.addEventListener('click',() =>{
       
        const li = document.createElement('li');
        li.className = 'elementList'
        li.textContent = valuetxt.value
        const p = document.createElement('p') 
        p.textContent = valuenum.value
        ulList.appendChild(li);
        li.appendChild(p)
        
    })
}
liCreate();



