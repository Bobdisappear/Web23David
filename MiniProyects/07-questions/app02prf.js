  

//Seleccionames los elementos del DOM que necesitamos:
// Una coleccion de los articulos que tengan la clase .question

const questions = document.querySelectorAll('.question')

questions.forEach((question) =>{
    const btnArticulo = question.querySelector('.question-btn')
    btnArticulo.addEventListener('click', () =>{
        //Miro si la lisra de questiones tiene la clase show-text y se la quito
        questions.forEach(function(noquestion){
            if(question !== noquestion){
            noquestion.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
        console.log(question);
    })
})

//Traversion the DOM

//Buscamos directamente todos los botones

// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(event){
//         const question = event.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })

// //