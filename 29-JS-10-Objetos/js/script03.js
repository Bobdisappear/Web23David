



//añadir un objeto a otro
const product = {
  
    nameProduct: "monitor 40 pulgadas", 
    price: 200,
    avaliable: false,
    discount: '20%'

};

const size = {
    h: 1,
    w: 23
}

// const result = Object.assign(product, size);
// console.log(result);



//Copiar un objeto (No copiar objetos de esta forma)
console.log(product);

const productoCopia = product;

console.log(productoCopia);

productoCopia. nameProduct = "Teclado copia"

//Copiar objetos

const Copia = { ...product}

const Copia2 = structuredClone(product)

const Copia3 = Object.assign({product})


//Spoiler metodo

const productX = {
  
    nameProduct: "moni 40 pulgadas", 
    price: 100,
    avaliable: true,
    discount: '15%',
    showInfo: function (){
        return `El producto: ${this.nameProduct} tiene un precio de ${this.price}`


    }
};
const txtinfo = productX.showInfo();  //Metodos (amarillos)
console.log(txtinfo)


//Obtener informaciçon del objeto

console.log(Object.keys(productX)); //Devuelve la informacion

console.log(Object.values(productX)); //Devuelve el valor

console.log(Object.entries(productX)); //Devuelve array
