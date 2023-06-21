// ejercicio 1

const firstname = "Lata"

// ejercicio 2

"Geeta"

// ejercicio 3

const flower = "rose";
const tree = "maple";

// ejercicio 4

"Toe"

// ejercicio 5

"Hardy"

// ejercicio 6

function hello() {
    return "Hello world!"
}

// ejercicio 7

function a() {
    return "Hello a!";
}
function b() {
    return "Hello b!";
}

// ejercicio 8

function greet() {
    return "Haydo!"
}
let salutation = greet()

// ejercicio 9

"Hi!"

// ejercicio 10

function echo(input) {
    return input;
}

// ejercicio 11

"How do you do?"

// ejercicio 12

function greet(input) {
    return "Hello " + input + "!"
}

// ejercicio 13

"Where is Jacky?"

// ejercicio 14

"Hi Selva! Hi Pola!"

// ejercicio 15

function log() {
    console.log("Hello Console!")
}

// ejercicio 16

function log(input) {
    console.log(input)
}

// ejercicio 17

function shout(input) {
    let result = input + input;
    console.log(result);
    return result;
}

// ejercicio 18

"Roy and Roy"

// ejercicio 19

"TicTacTicTac"

// ejercicio 20

function length(input) {
    const phrase = input.length;
    return phrase
}

// ejercicio 21

function toCase(input) {
    const phrase = input;
    const low = phrase.toLowerCase();
    const upper = phrase.toUpperCase();
    return low + "-" + upper
}

// ejercicio 22

function shortcut(input1, input2) {
    const str1 = input1.charAt(0);
    const str2 = input2.charAt(0);
    return str1 + str2
}

// ejercicio 23

function firstChar(input) {
    const trimmed = input.trim();
    const first = trimmed.charAt(0);
    return first;

}

// ejercicio 24 

function indexOfIgnoreCase(input1, input2) {
    const min = input1.toLowerCase();
    const max = input2.toLowerCase();
    const index = min.indexOf(max)
    return index
}

// ejercicio 25

function secondIndexOf(s1, s2) {
    let fi = s1.indexOf(s2);
    return s1.indexOf(s2, fi + 1);
}

// ejercicio 26

function firstWord(s1) {
    const first = s1.indexOf(" ")
    const sub = s1.substr(0, first)
    return sub
}

// ejercicio 27

function normalize(s1) {
    const str = s1;
    const newstr = str.replace("-", "/");
    const newstr2 = newstr.replace("-", "/");
    return newstr2
}

// ejercicio 28

function add(n1, n2) {
    let res = n1 + n2;
    return res
}

// ejercicio 29

7

// ejercicio 30

function toFahrenheit(s1) {
    let c = s1;
    let f = c * 1.8 + 32;
    return f

}

// ejercicio 31

function onesDigit(s1) {
    let res = s1 % 10
    return res
}

// ejercicio 32

function mean(s1, s2) {
    let mean = (s1 + s2) / 2
    return mean
}

// ejercicio 33

function hypotenuse(a, b) {
    let c = Math.pow(a, 2) + Math.pow(b, 2)
    return Math.sqrt(c)
}

// ejercicio 34

function midrange(a, b, c) {
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    let mean = (min + max) / 2
    return mean
}

// ejercicio 35

function area(a) {
    let res = Math.PI * (a * a);
    return res;
}

// ejercicio 36

function round100(a) {
    let uno = Math.round(a / 100) * 100
    return uno
}

// ejercicio 37

function dice() {
    let res = 1 + Math.floor(Math.random() * 6);
    return res
}

// ejercicio 38

function add(s) {
    let summand1 = parseInt(s, 10);
    let indexPlus = s.indexOf('+');
    let sAfterPlus = s.substr(indexPlus + 1);
    let summand2 = parseInt(sAfterPlus, 10);
    return summand1 + summand2;
}

// ejercicio 39

function nand(a, b) {
    let and = a && b;
    return !and
}

// ejercicio 40

function nor(a, b) {
    let and = !a && !b;
    return and
}

// ejercicio 41

function xor(a, b) {
    return (a !== b);
}


// ejercicio 42

function equals(a, b) {
    let equal = a === b
    return equal
}

// ejercicio 43

function equals(a, b, c) {
    let equal = a === b && b === c
    return equal
}

// ejercicio 44

function isEven(n) {
    let even = n % 2 === 0
    return even
}

// ejercicio 45

function unequal(a, b, c) {
    let unequal = a !== b && b !== c && a !== c;
    return unequal
}

// ejercicio 46

function isThreeDigit(n) {
    let check = n >= 100 && n < 1000
    return check

}

// ejercicio 47

function equals(n1, n2) {
    if (n1 === n2) {
        return "EQUAL"
    } else {
        return "UNEQUAL"
    }
}

// ejercicio 48

function repdigit(n) {
    let ones = n % 10
    let tens = Math.floor(n / 10)
    if (ones === tens) {
        return "Repdigit!"
    }
    return "No Repdigit!";
}

// ejercicio 49

function addWithSurcharge(n1, n2) {
    let surcharge = 0;
    if (n1 <= 10) {
        surcharge = surcharge + 1
    } else {
        surcharge = surcharge + 2
    }
    if (n2 <= 10) {
        surcharge = surcharge + 1
    } else {
        surcharge = surcharge + 2
    }
    let total = n1 + n2 + surcharge;
    return total
}

// ejercicio 50

function addWithSurcharge(n1, n2) {
    let s = 0;
    if (n1 <= 10) { s = s + 1 }
    else if (n1 <= 20) { s = s + 2 }
    else if (n1 > 20) { s = s + 3 }
    if (n2 <= 10) { s = s + 1 }
    else if (n2 <= 20) { s = s + 2 }
    else if (n2 > 20) { s = s + 3 }
    let total = n1 + n2 + s
    return total
}

// ejercicio 51

function toArray(n1, n2) {
    let array = [n1, n2]
    return array
}

// ejercicio 52

function getFirstElement(n1) {

    let lista = n1;
    let first = lista[0];
    return first
}

// ejercicio 53

function setFirstElement(n1, n2) {
    n1[0] = n2;
    return n1
}

// ejercicio 54

function getLastElement(a) {
    let lastIndex = a.length - 1
    return a[lastIndex]
}

// ejercicio 55

function sort(a) {
    let array = a.sort()
    return array
}

// ejercicio 56

function rotate(a) {
    let shif = a.shift();
    a.push(shif);
    return a
}

// ejercicio 57

function add(array, n) {
    const a = array
    const item = n
    const check = array.includes(n)
    if (!check) {
        a.push(n)
    }
    return a
}

// ejercicio 58


function concatUp(a, b) {
    let a1 = a.length
    let a2 = b.length
    let newarray
    if (a1 > a2) {
        newarray = b.concat(a)
    } else if (a1 === a2) {
        newarray = a.concat(b)
    } else {
        newarray = a.concat(b)
    }
    return newarray
}

// ejercicio 59

function halve(array) {
    let mitad = Math.ceil(array.length / 2)
    return array.slice(0, mitad)
}

// ejercicio 60

function list(array) {

    if (array.length === 0) {
        return ""
    }
    else if (array.length === 1) {
        return array[0]
    }

    let exclusionUltimaPalabra = array.slice(0, array.length - 1)
    let ultimaPalabra = array[array.length - 1]
    return exclusionUltimaPalabra.join(", ") + " and " + ultimaPalabra
}

// ejercicio 61

function flat(array) {
    return array.flat()
}

// ejercicio 62

function median(array) {
    let median;
    if (array.length % 2 != 0) {
        let res = Math.floor(array.length / 2)
        median = array[res]
        return median
    } else {
        let res = Math.floor(array.length / 2)
        median = (array[res] + array[res - 1]) / 2
        return median
    }

}

// ejercicio 63

function hello(param) {
    if (param === undefined) {
        return "Hello world!"
    } else {
        return "Hello " + param + "!"
    }
}

// ejercicio 64

function cutComment(str) {
    const ar = str.split("//")
    return ar.length > 1 ? ar[1].trim() : null
}

// ejercicio 65

function addTo(n) {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}

// ejercicio 66

function factorial(n) {
    let factor = 1
    for (let i = 1; i <= n; i++) {
        factor = factor * i
    }
    return factor
}

// ejercicio 67

function mean(arrayNumbers) {
    let suma = 0
    for (let i = 0; i < arrayNumbers.length; i++) {
        suma = suma + arrayNumbers[i]
    }
    return suma / arrayNumbers.length
}

// ejercicio 68

function spaces(n) {
    let espacios = ""
    while (espacios.length < n) {
        espacios = espacios + " "
    }
    return espacios
}

// ejercicio 69

function lcm(a, b) {
    let minimo = 0

    do {
        minimo++
    }
    while (minimo % a !== 0 || minimo % b !== 0)

    return minimo
}

// ejercicio 70

function gcd(a, b) {

    do {
        if (a > b) {
            a -= b
        }
        if (b > a) {
            b -= a
        }
    }
    while (a != b)

    return a
}

// ejercicio 71

function isPrime(n) {
    if (n <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // n es divisible por i, por lo tanto no es primo
        }
    }

    return true; // n es primo
}

// ejercicio 72

function sum(array) {
    let simple = array.flat()
    let sum = 0
    for (let i = 0; i < simple.length; i++) {
        sum = sum + simple[i]
    }
    return sum
}

// ejercicio 73

function max(...numbers) {
    return Math.max(...numbers)
}

// ejercicio 74

function parseFirstInt(input) {

    let inputToParse = input;

    for (let i = 0; i < input.length; i++) {
        let firstInt = parseInt(inputToParse);
        if (!Number.isNaN(firstInt)) {
            return firstInt;
        }
        inputToParse = inputToParse.substr(1);
    }

    return NaN;
}

