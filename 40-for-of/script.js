//for of

const item = ['libro', 'mesa', 'sill']
const usuarios = [{nombre: 'Luis'},{edad: '24'} ]









for (const cosas of item){
    console.log(cosas);
}

for (const usuario of usuarios){
    console.log(usuario.nombre);
}


//Iterar a traves de strings

const str = 'Hello world'

for (const letra of str){
    console.log(letra);
}

                        //Investigar map y set


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

//Iterar Arrays 

const colorArray = ['red','black','green']
for(const key in colorArray){
    console.log(colorArray[key]);
}

