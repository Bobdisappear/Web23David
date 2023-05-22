

// const tablero = document.getElementById('tablero');
// const white = document.querySelector('.white-imp');
// const black = document.querySelector('.black-par');



// function drawtable(){
    
//     const row = [white , black , white , black , white , black , white , black]
//     const content = row.innerHTML;

// for(let i=0; i<=content ; i++){
//     document.write(content)
  
    
//     for(let j=0; i<=row ; j++){

//     } 
// }
// }

// drawtable();
// console.log(drawtable);

// function table()

// for(let i=1; i<=8 ; i++){
//     document.write('<ul>' + '<li>' + i +'</li>' + '</ul>')
//     for(let j=2; j<=9 ; j++){
        

//     }
// }

// table(i);

function createChessBoard(){
    const chessBoard = document.getElementById('chessboard')
    let chessboardHTML = '';

    for(let fila = 0 ; fila<8 ; fila++){
        for(let col=0;col<8;col++){
            // const colorCasilla = '';
            // if((fila + col) % 2 === 0 ){
            //     colorCasilla = 'white'
            // }else{
            //     colorCasilla = 'black'
            // }

            const colorCasilla = (fila + col) % 2 === 0 ? "white" : "black";
            chessboardHTML += `<div class="casilla ${colorCasilla}"></div>`

        }
    }
    chessBoard.innerHTML = `<div class= "fila">${chessboardHTML}</div>`

}

createChessBoard();