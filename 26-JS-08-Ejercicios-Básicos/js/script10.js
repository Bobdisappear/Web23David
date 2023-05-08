
const text = prompt("escribe algo");

function countVowel(str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

const result = countVowel(text);
document.write(result)


