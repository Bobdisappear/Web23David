//using selectors inside the element
// traversing the dom


const plusbtn = document.querySelector('.plus-icon')
const text = document.querySelector('.question-text')


// toogle funciona como boton, haciendo boolean)

 plusbtn.addEventListener('click', function(){    
    text.classList.toggle('question-text')
     
})

// minusBtn.addEventListener('click', function(){
//     // text.classList.remove('question-text') &&
//     // para.parentElement.remove(para)
//     })
 
