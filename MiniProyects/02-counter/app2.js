
let contador = 0;
const txtValue = document.getElementsByClassName('value');
const btns = document.querySelectorAll('.btn');

// for(let i= 0 ; i<btns.length ; i++){
//     btns[i].addEventListener('click', function(){
//         btns[i].style.color = "red"
//     })
// }

for(let i= 0 ; i<btns.length ; i++){
    btns[i].addEventListener('click', function(e){

    const styles = e.currentTarget.classList;
    
        if(styles.contains('decrease')){
            contador--;
        }else if (styles.contains('increase')){
            contador++
        }else{
            contador = 0;
        }
       
    value.textContent = contador
    })
}


// btns.forEach(function(miboton){
//     miboton.addEventListener('click', function(e){

//     const styles = e.currentTarget.classList;
    
//         if(styles.contains('decrease')){
//             contador--;
//         }else if (styles.contains('increase')){
//             contador++
//         }else{
//             contador = 0;
//         }
//     value.textContent = contador
    
// })
// })



