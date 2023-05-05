
//Numeros van sin comillas

const numeroA = 20;
const numeroB = 10;

const numero1 = 20.20;
const numero2 = .20;
const numero3 = -20.20;




console.log();

//Numeros como objeto

const numero4 = new Number(40);

//Operaciones

let resultado;

const n1 = 90;
const n2 = 8;

//suma

// resultado = 2 + 3;
resultado = n1 + n2;

//Resta
resultado = n1 - n2;

//Multiplicacion
resultado = n1 * n2;

//Division
resultado = n1 / n2;

//Modulo
resultado = n1 % n2;


const horasModulo = 90;
const horasDias = 8;
const horasSueltas = horasModulo % horasDias;



let diasCompletosModulo = (horasModulo - horasSueltas) / horasDias;
const SalidaTexto = `<h1>Dias módulo completos ${diasCompletosModulo}</h1>
                        <h2> Un dia de ${horasSueltas} horas</h2>`;
document.write(SalidaTexto);




console.log(resultado);
