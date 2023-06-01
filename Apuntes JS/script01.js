  
                                        // METODOS


                                        const producto = 'Monitor 20 pulgadas';
// typeof = Nos da el tipo que es
typeof producto;

//Extrae una parte de la cadena
producto.slice(10,5)
producto.substring(5,10)

// Empieza desde una parte de la cadena
producto.charAt(2)

//Quita espacios en blanco
producto.trim()

//repite
producto.repeat(2)

//Separa las palabras por coma 
producto.split(" ")

//Nos da la longitud
producto.length

//Devuelve la posición
producto.indexOf(20)

//Devuelve Booleano (Verdadero/Falso)
producto.includes("Monitor");

//Convierte el texto en Mayuscula
producto.toUpperCase();

//Remueve los espacios en blanco del principio y del final del string
producto.trimStart();

                        //Para Arrays
                        
// Inserta un elemento al final del arreglo.
// producto.push() 

// Inserta un elemento al inicio del arreglo.
// product.unshift()

// Remueve un elemento del final del arreglo.
// product.pop()

// Remueve un elemento del principio del arreglo.
// product.shift() 

// Crea una copia sombra del arreglo.
// product.slice() 

// Recorrer array
// product.forEach()

// Filtrar array
// product.filter

            // Function con filter

            const companies = [
                {name: 'company 1',
                categoria: 'telefonia',
                start: 1990,
                end: 2024,},
                {name: 'company 2',
                categoria: 'retail',
                start: 1980,
                end: 2034,},
                {name: 'company 3',
                categoria: 'finance',
                start: 2013,
                end: 2014,},
                {name: 'company 4',
                categoria: 'auto',
                start: 1950,
                end: 2024,},
                {name: 'company 5',
                categoria: 'retail',
                start: 1982,
                end: 2100,},
                {name: 'company 6',
                categoria: 'auto',
                start: 1880,
                end: 1885,}
            
               
            ]
const Retail = companies.filter(n => ( n.categoria == "retail") )
console.log(Retail);


                                        //Matemáticas

                                        const resultado = 13.135746521

//Redondea al alza
Math.round(resultado)

//Redondea a la baja
Math.floor(resultado)

//Aleatorio
res = Math.random();
res = Math.round(Math.random() *30);

console.log(res);

//String a numero
const num1 = "20";
console.log(Number.parseInt(num1));

//Revisar si tenemos un numero
console.log(Number.isInteger(num1));


                                        //Condicional If else

const edad = ''

if(edad >= 18){
    console.log("Carnet de coche");    
}else if( edad >=16){
    console.log("Carnet de moto");
}else {
    console.log("No hay carnet");
};



                                        // Estructura Switchcase

const metodoPago = 'efectivo';
switch (metodoPago) {
    case 'efectivo': 
        console.log(`pagaste con ${metodoPago}`);
    break;
    
    case 'tarjeta': 
        console.log(`pagaste con ${metodoPago}, conectando...`);
    break;

    default:
        console.log();
        break;
}


                                            //Bucles

                                    

let i = 0;

while(i < 10){
    console.log("Valor de i es " +i)
    i++;
}

// do while, almenos se ejecuta una vez

let z = 20;
do{
    console.log("Valor de z es " +z)
    z++;
}while(z < 10);


                                            // for, bucle

for(let a = 0; a < 10 ; a++){
    console.log('Numero ' + a);
}

                                            //For in

const colorObject = {
    color1: 'red',
    color2: 'black',
    color3: 'green',
    color4: 'blue',
    color5: 'rorange'
}

for(const key in colorObject){
    console.log(key,colorObject[key]);
}
                                            // For of

 const str = 'Hello world'
 for (const letra of str){
     console.log(letra);
 }



                                            //Objetos

const product = {
    nameProduct: "monitor 40 pulgadas", 
    price: 200,
    avaliable: false,

};

//Se puede crear un objeto dentro de otro objeto

const product2 = {
    nameProduct: "Raton usb", 
    price: 100,
    avaliable: false,
    info: {  //Creo objeto
        weight: '10kg',
        size:{  //creo objeto
            h: 12,
            w: 2,
        }
    }
}

console.log(product);

// Desestructurar
const product3 = product2.info.weight ;
console.log(product3);

//Copiar objetos

const Copia = { ...product}

const Copia2 = structuredClone(product)

const Copia3 = Object.assign({product})

//Obtener información del objeto

console.log(Object.keys(product)); //Devuelve la informacion

console.log(Object.values(product)); //Devuelve el valor

console.log(Object.entries(product)); //Devuelve array



                                            //Funciones

function addEuro(value){
        return value + '€';
    }

    //Cuando se usan declaraciones se pueden llamar a las funciones antes de declararlas
    addEuro(300);

    //Arrow function
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
 
    const numerosPares = []
    
    numbers.forEach((numero) => {
        if(numero % 2 === 0 ){
            numerosPares.push(numero)
        }
    })
    
    console.log(numerosPares);



