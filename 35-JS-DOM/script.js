

//Objeto global window
console.log(window);
//El DOM es parte del objeto window
console.log(window.document.doctype);

//Podemos acceder a los elementos del DOM directamente con sus propiedades
console.log(window.document.body);

// lista con los links
console.log(window.document.links);

//Podemos establecer las propiedades de los elementos

// document.body.innerHTML = "ey!"

console.log(document.body.innerHTML); 

// Tenemos metodos para seleccionar de forma mas especifica

// document.getElementById("test").innerHTML.firsChild = "Cesta de la compra"

// opcion de query (CSS)

document.querySelector("#test h1").innerHTML = "Cestita"