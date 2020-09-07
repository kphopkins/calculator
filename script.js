let operators = [];
let numbers = [];
let num = "";

const display = document.querySelector("#display");

let lastClicked = "";

const numBtn = document.querySelectorAll(".num");
numBtn.forEach(button => button.addEventListener("click", () => {
    if (operators[0] === "=") {
        operators.shift();
        num = button.innerHTML;
        display.innerHTML = `${button.innerHTML}`;
    } else {
        if (num.includes(".") && button.innerHTML == ".") {
            return;
        } else {
            display.innerHTML += `${button.innerHTML}`;
            num += button.innerHTML;
        }
    }

    lastClicked = "num";
}));

const opBtn = document.querySelectorAll(".op");
opBtn.forEach(button => button.addEventListener("click", () => {
    if (operators[0] === "=") {
        operators.shift();
    }

    numbers.push(Number(num));
    operators.push(button.innerHTML);
    num = "";
    display.innerHTML += `${button.innerHTML}`;

    lastClicked = "op";
}));

const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", () => {
    if (numbers.length == 0) {
        return;
    } else {
        numbers.push(Number(num));
        
        let result = Math.round(numbers.reduce(operate) * 100) / 100;
        
        num = result.toString();
        if (num == "NaN") {
            display.innerHTML = "<p style='font-size: 18px;'>Can't divide by 0. Try again.</p>";
        } else {
            display.innerHTML = result;
        }
        
        numbers = [];
        lastClicked = "";
        operators.push("=");
    }
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearCalc)

function clearCalc() {
    operators = [];
    numbers = [];
    num = "";
    lastClicked = "";
    display.innerHTML = "";
}

const delBtn = document.querySelector("#del");
delBtn.addEventListener("click", () => {
    let text = display.innerHTML.split("");
    text.pop();
    display.innerHTML = text.join("");

    if (lastClicked = "num") {
        let numList = num.split("");
        numList.pop();
        num = numList.join("");
    } else if (lastClicked = "op") {
        operators.pop();
    }
})

function operate (a, b) {
    let op = operators[0];

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
    if (a / b == "Infinity" || a / b == "-Infinity") {
    } else {
        return a / b; 
    }
}