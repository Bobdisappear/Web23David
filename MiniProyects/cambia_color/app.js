

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const btn = document.getElementById('btn');
const textColor = document.querySelector('.color')


btn.addEventListener('click', function(){
    let hexColor = '#'
    
    for (let i = 0; i < 6 ; i++){
    const randomIndex = generarNumeroaleatorio(hex.length)
    hexColor = hexColor + hex[randomIndex]
    hex[randomIndex] 
    console.log(hex[randomIndex]);
}
document.body.style.backgroundColor = hexColor
textColor.textContent = hexColor
})

function generarNumeroaleatorio(range){
   return Math.floor(Math.random() * range)
}


// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// Crear una funcion que devuelva un volor aleatorio
// function randomColor (){
//     return Math.floor(Math.random() * colors.length)
//  }

// Obtener numero aleatorio
    // const randomIndex = randomColor(colors.length)
    // const randomColors = colors[randomIndex]
    // // Cambiar color de fondo
    // document.body.style.backgroundColor = randomColors
    // // cambiar el texto con el nombre del color seleccionado
    // textColor.textContent = randomColors
    

// randomColor();

// function randomColor (range){
//     return Math.floor(Math.random() * range)
//  }


// let bg = document.querySelector('.container');

// let randomColor = Math.floor(Math.random(bg.style.backGroundColor));
// btn.addEventListener('click', ()=>{
//     randomColor.length
// });


