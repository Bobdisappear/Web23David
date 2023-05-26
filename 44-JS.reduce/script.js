
const numbers = [1,2,3,4,5,6,7,8,9,10]

//Usando un loop

const suma = () => {
    let acc = 0
    for(const current of numbers){
        acc += current
    }
    return acc
}

suma();

//Con reduce

const suma1 = numbers.reduce((acumulador, currentNumber) =>{
    return acumulador + currentNumber;
},0)

//Version reducida

const suma2 = numbers.reduce((acumulador, currentNumber) => acumulador + currentNumber,0)


const lista = [
    {id: 1,
    nombre: 'Patatas',
    precio: 30},
    {id: 2,
    nombre: 'Patitos',
    precio: 500},
    {id: 3,
    nombre: 'Petetes',
    precio: 100},
]

const bono = 500;

const total = lista.reduce((acumulador, producto)=>{
    return acumulador + producto.precio
},-bono);



console.log(total);