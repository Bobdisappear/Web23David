//for of

const item = ['libro', 'mesa', 'sill']
const usuarios = [{nombre: 'Luis',edad: 24},{nombre: 'Carlos',edad: 24} ]


console.log(item);
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

const num =[1,2,3,4,5,6]

for(const nums of num){
    console.log(nums);
}

function RecorrerArrays (r){
    for(let ree of r){
        console.log(ree);
    }
}                
RecorrerArrays([1,2,3,4,5,7,6]);
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

for(const key in colorObject){
    console.log(colorObject[key]);
}
//Iterar Arrays 

const colorArray = ['red','black','green']
for(const key in colorArray){
    console.log(colorArray[key]);
}



        //Investigar map y set
