

const miDIv = document.createElement('div');
miDIv.className = "my-element"
miDIv.id = "container"
miDIv.setAttribute("title", "my new div")
// miDIv.innerText = "Hello world"

const textNode = document.createTextNode("Node")

miDIv.appendChild(textNode)


//document.body.appendChild(miDIv)

document.querySelector('ul').appendChild(miDIv)

console.log(miDIv);