

const list = document.querySelector('.items');

// Rapido y no recomendable

function createListItem(item){
    const li = document.createElement('li');
    li.className =  'item'
    li.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`
    list.appendChild(li);
}


//Ñimpia y recomendable

function createNewtItem(item){
    const li = document.createElement('li');
    li.className =  'item'
    li.appendChild(document.createTextNode(item));
    
    const btn = document.createElement('button');
    btn.className = 'remove-item btn-link text-red'
    
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-xmark'
    
    btn.appendChild(icon)

    li.appendChild(btn)

    list.appendChild(li)
}





createListItem('Eggs');
createListItem('Potatoes');

createNewtItem('Cheese');