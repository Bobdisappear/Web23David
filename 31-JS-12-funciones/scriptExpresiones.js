//'window' tiene scope (ámbito) global
//alert() metodo de window


//Ambito globarl

const x = 100;


// Function scope
function run(){
    //Tenemos acceso al ambito global
    console.log(window.innerHeight);

}

run();

//Ámbito (Scope) de bloque

if(true){

}

//sobreescribe la variable del ambito global pero solo en el bloque
// function add(){
//     const x = 1;
// }




function first(){
    const x = 100;
    
    function second(){
        const y = 200
    }
    second();
}

first();


if(true){
    const x = 100;

    if (x === 100){
        const y = 200
        console.log(x+y);
    }
}



//Expresiones


    //Declaracion de funcion
    function addEuro(value){
        return value + '€';
    }

    //Cuando se usan declaraciones se pueden llamar a las funciones antes de declararlas
    addEuro(300);

    //Fucion como expresion
    let addDolar = function (value){
        return value + '$';
    }

    console.log(addDolar(400)); 

    addDolar = function (value){
        return  "precio " + value +'$';
    }



//Arrow Function

// const add = function (a,b) {
//     return a + b
// }
        //  Version antigua

const add = (a,b) => {
    return a + b
}

console.log(add(8,9));  

//El return de la arrow functions es implicito

const substract = (a,b) => a + b;

console.log(substract(8,9));


//En caso de tener solo un parametro se puede omitir el ()

const doble = a => a*2;

console.log(doble(2));

//Return de un objeto

const createObject = () =>({name: "John Doe", edad: "22"})

const numeros =[1,2,3,4,5]

//n sera cada numero del array numeros
numeros.forEach(function(n){
    console.log(n);
})

numeros.forEach(n => console.log(n))