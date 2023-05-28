
//rest operator

//spread operator
function arrayMaker(...paramsList){
    const miArray = [...paramsList]
    return true;
}
const miArray = arrayMaker('Lunes','Martes','Miercoles')

let cono = ['variuable','otracosa']
let otro = ['rest', 'cuad','sdsd']
let conoOtro = [...cono,...otro]

//recojo la funcion en miBooleano / llamo la funcion /  
const miBooleano = arrayMaker('Lunes', 'martes', 'miercoles');

//array de ejemplo

const tablero = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//obtener el resultado de la suma de los numeros del tablero

let suma = 0


//el primer bucle recorre las arrays/ el s

for(let i = 0 ; i < tablero.length ; i++){
    for(let j = 0 ; j<tablero[i].length ; j++){
        const num = tablero[i][j]
        suma = suma + num
    }
}


//multiplicar

const value = 0
// const nums = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9,10]];
 

// for( let i = 0 ; i <nums.length ; i++){
//     for(let j = 0 ; j<nums[i] ; j++){
//         const doublenum = nums[i][j]
//         if (i = true){
//             const result = i * j
            
//         }
        
//     }
// }


for( let i = 1 ; i <9 ; i++){
    for(let j = 1 ; j<=10 ; j++){
        const num = i
        const num2 = j
        const result = num * num2
        
        console.log(result);   
    }
}


// for( let i = 0 ; i <9 ; i++){
//     for(let j = 0 ; j<=10[i] ; j++){
//         const doublenum = nums[i][j]
//         if (i = true){
//             const result = i * j
//             console.log(result);
//         }
        
//     }
// }



// const value = 0
// const nums = [1,2,3,4,5,6,7,8,9];
// const table =[1,2,3,4,5,6,7,8,9,10];
 

// for(let i = 0 ; i <nums.length ; i++){
//     for(let j = 0 ; j<table[i].length ; i++){
       
//         const doublenum = nums[i][j]
//         let res = value + doublenum
       
//         console.log(res);
//     }
// } 
