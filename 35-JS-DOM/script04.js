
//Selectores multiples

//Devuelven una NodeList

const list = document.querySelectorAll('.item')
console.log(list);
//Acceder por sus indices
console.log(list[0].innerText);

list[0].style.color = 'red'

//Podemos usar el metodo forEach en las NodeList

//se ejecuta una funcion para cada una de las listas


//Podemos recorrer las listas y añadir
list.forEach((item, index)=> {
    item.style.color = "blue"
    if(index === 1){
        item.remove();
    }
    if(index=== 3){
        item.innerHTML = `Cacahuetes
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`
    }

})


//Devuelven una HTMLCOlection


const list2 = document.getElementsByClassName('item')

//Se tienen que convertir a Array para tener los metodos de los arrays

const list2array =Array.from(list2);
console.log(list2array);

list2array.forEach((item)=>{})

document.getElementsByTagName('li')