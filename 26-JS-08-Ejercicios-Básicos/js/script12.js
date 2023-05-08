
const text = prompt('Escribe una frase') ;
const acount = text.split("a").length;
const ecount = text.split("e").length;
const icount = text.split("i").length;
const ocount = text.split("o").length;
const ucount = text.split("u").length;
const total = (`hay: ${acount - 1} vocales a  /` + `hay: ${ecount - 1} vocales e  /` + `hay: ${icount - 1} vocales i  /` + `hay: ${ocount - 1} vocales o  /` + `hay: ${ucount - 1} vocales u  `);

document.write(total)