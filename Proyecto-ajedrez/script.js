let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width;
let y = canvas.height;

let value = 0

let squareRowCount = 8;
let squareColumnCount = 8;
let squareWidth = 40;
let squareHeigth = 40;
let squarePadding = 1;


const squares = [];
for (i = 0 ; i < squareColumnCount ; i++){
    squares[i] = [];
    for (j = 0 ; j < squareRowCount ; j++){
        squares [i][j] = {x: 0, y:0, status: 1};
    }
} 

function drawsSquares() {
   
    for (i = 0; i < squareColumnCount; i++){
        for (j = 0; j <squareRowCount; j++){
            if(squares[i][j].status == 1){
            let squareX = (i*(squareWidth + squarePadding)) ;
            let squareY = (j*(squareHeigth + squarePadding)) ;
            squares [i][j].x = squareX;
            squares [i][j].y = squareY;
            ctx.beginPath();
            ctx.rect(squareX, squareY, squareWidth, squareHeigth);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        }
        }
    }
}

function draw(){
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawsSquares();
    
}

setInterval(draw,16);

// let squareWhite = document.querySelector('.white')
// let squareBlack = document.querySelector('.black')

// const squarePositionRow1 = [1,2,3,4,5,6,7,8]



// let squarePositions = [...squarePositionRow1,...squarePositionRow2]


// console.log(squarePositions);

// for (i= 0; i< 4; i++){
//     squarePositionRow1 = i++;
    
// }





// function arrayMaker(...paramsList){
//     const miArray = [...paramsList]
//     return true;
// }