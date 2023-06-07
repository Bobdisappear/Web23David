
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User ("Jack");

// alert(user.name);
// alert(user.isAdmin);

// function User2(name){
//     this.name = name;

//     this.sayHi = function(){
//         alert("My name is: " + this.name);
//     };
// }

// let john = new User2("John");

// john.sayHi();

                // function Calculator(){
                //     this.read = function(){
                //     this.a = +prompt ("primer numero", 0);
                //     this.b = +prompt ("Segundo numero", 0);
                //     };
                //     this.sum = function(){
                //         return this.a + this.b;
                //     };

                // };

                // let calculator = new Calculator();
                // calculator.read();

                // alert("Sum=" + calculator.sum());
                // alert(Calculator.mul) 

function Accumulator(startingValue){
    this.value = startingValue
    this.read = function(){
        this.value += +prompt("El nuevo valor es:", 0);
    };
};

let acumulator = new Accumulator(0);
acumulator.read();
alert(acumulator.value);
acumulator.read();
alert(acumulator.value);
document.write(`<h1> ${acumulator.value} </h1>`)


