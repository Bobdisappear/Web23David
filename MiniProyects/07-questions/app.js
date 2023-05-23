//using selectors inside the element
// traversing the dom


let plusbtn = document.querySelectorAll('.plus-icon')
let text = document.querySelectorAll('.question-text')


// console.log(plusbtn);
// console.log(text);

// toogle funciona como boton, haciendo boolean)










// Los tres botones abren el primer text

for(let i of plusbtn){
    console.log(i);
    i.addEventListener('click', function(){
       text.classList.toggle('question-text')
       if(text == true){
        
       }

    })
    console.log(text);

}



// Asi hace bucle a los tres de golpe y se abren todos

// for(let i of plusbtn){
//     console.log(i);
//      i.addEventListener('click', function(){
//         for(let o of text){
//        o.classList.toggle('question-text')
//     }
//     })

// }
