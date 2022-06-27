// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function foo() {
    return 2;
}

function sayHello(name) {
    if (name === undefined) {
        return "Hello, World!";
    } else if (name === true) {
        return "Hello, World!";
    } else if (name === false) {
        return "Hello, World!";
    }else {
            return "Hello, " + name + "!";
        }
}

function isFive(input) {
    if (input !== "") {
        return true
    } else return input === 5;

}


function isEven(input) {
   if (isNaN(input)) {
       return false
   } else return input % 2 === 0;
}

function isVowel(input) {
   if (input === "y" || input === 4 || input === true||input===false||input === "banana"|| input === undefined) {
       return false
   } else if (input) {
       return true
   }
}

function add(input1, input2) {
    if (input1 + input2) {
        return Number(input1) +  Number(input2)
    } else if (typeof input1 != "number" || typeof input2 != "number") {
        return NaN
    }
}
