//using selectors inside the element
// traversing the dom


let plusbtn = document.querySelector('.plus-icon')
let text = document.querySelector('.question-text')


// toogle funciona como boton, haciendo boolean)

for(let i=0 ; i<plusbtn.length || i<text.length ; i++){
    plusbtn[i].addEventListener('click', function(){
       text[i].classList.toggle('question-text')
    })

}


// minusBtn.addEventListener('click', function(){
//     // text.classList.remove('question-text') &&
//     // para.parentElement.remove(para)
//     })
 
