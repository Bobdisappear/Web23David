

// let value = 0
// let resultado = document.getElementById('resultado')
// const firstNum = document.getElementById('firstNum')
// const secondNum = document.getElementById('secondNum')
// const btn= document.querySelector('.resp')


// if (btn.addEventListener('click',)){
//     resultado = firstNum * secondNum
//     document.write(resultado)
// }



// function escribirTablaMultiplicar(j){

// 	document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");

// 	document.write("<ul>");

// 	for(i = 1;i<=10;i++){
// 		document.write("<li>");
// 		document.write(j + " x " + i + " = " + j * i);
// 		document.write("</li>");
// 	}

// 	document.write("</ul>");
// }

// escribirTablaMultiplicar(1);



function tableplus (num){
    document.write('<h1>Tabla de multiplicar del '+ num +'</h1>');

    for(i = 1; i<=10; i++){		
        document.write("<ul>" + "<li>" + num + ' x ' + i + ' = ' + num*i + "</li>" + "</ul>");
    }

}

tableplus(2);



function table(num){

    document.write('<h3>'+'tabla de multiplicar del ' + num + '</h3>')
    for(i=1 ; i<=10 ;i++){
        document.write( '<li>'+ i + ' x ' + num + ' = ' + i*num)
    }
}

table(5);