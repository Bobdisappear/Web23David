//using selectors inside the element
// traversing the dom


const plusbtn = document.querySelectorAll('.plus-icon')
const minusBtn = document.querySelector('.minus-icon')
const text = document.querySelector('.question-text')
const para = document.getElementById('text')
const para1 = document.getElementById('text1')
const para2 = document.getElementById('text2')


// toogle funciona como boton, haciendo boolean)
for (i = 0 ; i <plusbtn ; i++ ){
plusbtn.addEventListener('click', function(){
    // para.parentElement.appendChild(para)
    text.classList.toggle('question-text') 
// para.parentElement.toggle(para)
})}
minusBtn.addEventListener('click', function(){
    // text.classList.remove('question-text') &&
    para.parentElement.remove(para)
    })
 
