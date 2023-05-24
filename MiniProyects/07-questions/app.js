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
       
   
    })
    console.log(text);

}

// plusbtn.forEach(function(n){
//     n.addEventListener('click', function(r){
//         r.text.forEach(function(){

//             text.classList.toggle('question-text')
//         })
       
//     })    
//     console.log();
// })

// Asi hace bucle a los tres de golpe y se abren todos

// for(let i of plusbtn){
//     console.log(i);
//      i.addEventListener('click', function(){
//          for(let o of text){
//             o.classList.toggle('question-text')
//        console.log(o);
//     }
// })

// }






// Sigue abriendo los tres p en los tres botones
// for( let o of text){
//     for(let i of plusbtn){
//         i.addEventListener('click', function(){
//             o.classList.toggle('question-text')
//         })
//         console.log(o);
        
//     }
// }

// for(let i of plusbtn){
//     for(let o of plusbtn){
//         i.addEventListener('click', function(){
//             o.classList.toggle('question-text')
//         })
//     }
// }
