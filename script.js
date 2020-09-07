let operators = [];
let numbers = [];
let num = "";

const display = document.querySelector("#display");

const numBtn = document.querySelectorAll(".num");
numBtn.forEach(button => button.addEventListener("click", () => {
    if (operators[0] === "=") {
        operators.shift();
        num = button.innerHTML;
        display.innerHTML = `${button.innerHTML}`;
    } else {
        display.innerHTML += `${button.innerHTML}`;
        num += button.innerHTML;
    }
}));

const opBtn = document.querySelectorAll(".op");
opBtn.forEach(button => button.addEventListener("click", () => {
    if (operators[0] === "=") {
        operators.shift();
    }

    numbers.push(Number(num));
    operators.push(button.innerHTML);
    num = "";

    display.innerHTML += ` ${button.innerHTML} `;
    console.table(numbers);
}));

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
    if (numbers.length == 0) {
        return;
    } else {
        numbers.push(Number(num));
        
        let result = Math.round(numbers.reduce(operate) * 100) / 100;
        display.innerHTML = result;
        
        numbers = [];
        num = result.toString();

        operators.push("=");
    }
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearCalc)

function clearCalc() {
    operators = [];
    numbers = [];
    num = "";
    display.innerHTML = "";
}

function operate (a, b) {
    let op = operators[0];
    console.log(numbers);
    if (op === "+") {
        operators.shift();
        return(add(a, b));
    } else if (op === "-") {
        operators.shift();
        return subtract(a, b);
    } else if (op === "*") {
        operators.shift();
        return multiply(a, b);
    } else if (op === "/") {
        operators.shift();
        return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}