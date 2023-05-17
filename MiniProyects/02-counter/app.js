// Referenciar los elementos html
let value = 0

let Contador = document.getElementById('value')
const addBtn = document.getElementById('btnAnadir')
const restBtn = document.getElementById('btnQuitar')
const resetBtn = document.getElementById('btnReset')

restBtn.addEventListener('click', function(){
    value--; 
    Contador.textContent = value
    if (value < 0){
        Contador.style.color = "red"
    }   
     
    // let a = Number
    // for (let i = 0; i < a ; i++ ){
        
    // }
})

addBtn.addEventListener('click', function(){
   value++; 
    Contador.textContent = value
if (value > 0){
    Contador.style.color = "green"
}   

})

resetBtn.addEventListener('click', function(){
    Contador.textContent = 0 //+ this.style.color()
    // document.span.style.color('red')

})


