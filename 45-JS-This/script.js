
//Primitive object

let user = {
    name: "John",
    age: 30,
};


//tipica funcion y llamada a esta

// user.sayHi = function(){
//     alert("Hello!")
// }

// user.sayHi();

                                        //shorthand (podemos omitir function)

                                        // user = {
                                        //     sayHi() {
                                        //         alert("Hello");
                                        //     }
                                        // };

                                        // user.sayHi();


//No hacer esto =>

// let user2 = {
//     name: "David",
//     age: 35,

//     sayHi() {
//         alert(this.name);
//     }
// };

// user2.sayHi();


//Crear una calculadora

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
    Read() {
        this.a = +prompt('Dime un numero', 0);
        this.b = +prompt('Dime otro', 0);
    }
};

const suma = document.getElementById("suma");
const multiplicar = document.getElementById("multiplicar");

suma.addEventListener("click",()=>{
    calculator.Read();
    alert(calculator.sum());
})

multiplicar.addEventListener("click",()=>{
    calculator.Read();
    alert(calculator.mul());
})

const plus = document.getElementById("up")
const minus = document.getElementById("down")
const para = document.querySelector("p")

let count = {
    steps: 0,
    up(){
        this.steps++;
    },
    down(){
        this.steps--;
    },
    
};

plus.addEventListener("click", () =>{
    count.up();
})
minus.addEventListener("click", () =>{
    count.down();
})

para.textContent = count.steps;
