

const product = {
  
        nameProduct: "monitor 40 pulgadas", 
        price: 200,
        avaliable: false,
    
    };


// Extraer propiedades de un objeto a una variable =>

const nombre = product.nameProduct;

//Desestructurar un objeto

const {nameProduct, price, avaliable} = product;

console.log(nameProduct, price, avaliable);
console.log(price);

// Los objetos pueden contener cualquier cosa (al volver a abrir clau dators se crea otro objeto)

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

console.log(product2.info.weight);

// Desestructurar
const {info: {weight, medida}, } = product2;


//funciones de objetos raras pero existen

Object.freeze(product2)
product2.avaliable = true;

//Sellar el objeto (Puedo modificar valores pero no añadir nuevas)
Object.seal(product2);

console.log(product2);



