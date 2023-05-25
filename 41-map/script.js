

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// //Modificamos la array original y la multiplicamos por dos
// const numbersDouble = []


// for(i=0 ; i<numbers.length; i++){
//     numbersDouble[i] = numbers[i]*2
// }
// // Lo mismo  pero con metodo forEach

// numbers.forEach((numbers) =>{
//     numbersDouble.push(numbers * 2)
// });

//Metodo map

// const numbersDouble3 = numbers.map() 

//.map

const array = [2,5,7,9];

const newarray = array.map(x => x*2);

console.log(array);
console.log(newarray);

const stringArray = ['Javi','Ernesto','Lumpin']

const newStrings = stringArray.map(n => n+' Gonzalez')

console.log(newStrings);

// prototipeMAP ??

//.has

// console.log(stringArray.has('Javi')); //Dice que no es una funcion (revisar has/Set)


//set




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

//Crear un array de nombres de las compañias

const companyNames = companies.map(x => x.name);

console.log(companyNames);

//crear un array de objetos con solo los nombres y las categorias

const companyNamesCategory = companies.map(x => x.name + " " + x.categoria);

console.log(companyNamesCategory);

//Crear un array de objetos con e nombre y el tiempo de actividad en años

const companyNamesYears = companies.map(x => x.name + " " + (x.end - x.start));

console.log(companyNamesYears);


//ordenar por tiempo de actividad de menor a mayor 

const companyNamesYearsOrder = (companies.map(x => x.name + " " + (x.end - x.start)));


// numbers.forEach((numbers) =>{
    //     numbersDouble.push(numbers * 2)
    // });
console.log(companyNamesYearsOrder);



// impares y los doble en una linea
const numbers = [1,2,3,4,5,6,7,8,9,10];

const numbersfilter = numbers.filter(x => x  % 3 === 0 )
const numbersEven = numbersfilter.map(x => x*2) 

console.log(numbersEven);

const numbersEven2 =  (numbers.filter(x => x  % 3 === 0 )).map(x => x*2) 

console.log(numbersEven2);