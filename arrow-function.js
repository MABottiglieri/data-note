var square = (x) => {
    var result = x * x;
    return result;
};

//metodo alternativo
var square = (x) => x * x;
console.log(square(2));

var user = {
    name: "Manuel",
    sayHi: () => {
        console.log(arguments); //nell Arrow function non è previsto il comando "arguments" (richiamerebbe il comando globale "arguments")
        console.log(`Hi ${this.name}`); //nell Arrow function non è previsto il comando "this" (richiamerebbe il comando globale "this")
    }, 
    sayHiAlt() {
        console.log(arguments); // gli "arguments" sono i valori passati come parametri alla funzione
        console.log(`Hi ${this.name}`); //nell function normale è previsto il comando "this"
    } 
};

user.sayHi();
user.sayHiAlt(1,2,3);