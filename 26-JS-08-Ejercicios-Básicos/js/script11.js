
const text = prompt("escribe algo");

function countVowel(str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

const result = countVowel(text);
document.write(result)


// const frase = prompt("Escribe una frase").toLowerCase()
// const vocalList=["a","e","i","o","u"]
// let vocales = []

// for(i=0; i<frase.length;i++){
//     let char=frase.charAt(i);
//     if(vocalList.includes(char)){
//         vocales.push(char)
//     }
// }
// alert(La frase contiene ${vocales.length} vocales)