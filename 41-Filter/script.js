

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

//Queremos un nuevo array con los numeros pares

// const numPares = [ socials % 2 === 0]
// console.log(numerosPares);


const numerosPares = []

numbers.forEach((numero) => {
    if(numero % 2 === 0 ){
        numerosPares.push(numero)
    }
})

console.log(numerosPares);

//Con Filter

const numerosPares2 = numbers.filter(function(numero){
    return numero % 2 === 0
})
console.log(numerosPares2);

//Sintaxis abreviada

const numerosPares3 = numbers.filter(n => !(n % 2) ) 
console.log(numerosPares3);

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
//Obtener un array con solo las companias de categoria Retail


const inicio = companies.filter(i => ( i.start >= 1982) )
console.log(inicio);
//Obtener las companias que empezaron en 1982 inclusive y posteriores a 2005 y cerraron antes del 2005

const i = companies.start
const teenYears = companies.filter(e  => ( e.end - e.start >= 10    ))
console.log(teenYears);
//Obtener las compañias que tienen 10 años o mas de actividad