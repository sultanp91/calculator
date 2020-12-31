//Operators to be used inside the calculator

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b ) => {
    return a * b;
}

const divide = (a, b) => {
    return a / b;
}

let operand;

// operand will store the current selection for which operator to use

let operate = (a, b, c) => {
    return c(a, b);
}

// operate can take in 

let storedValue = [];
let currentValue = [];

let input = document.querySelector(".input");
let displayNum  = document.querySelector("#display");
let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide")
let equalsButton = document.querySelector("#equals");

let updateDisplay = () =>{
let newDisplay = parseInt(currentValue.join(""))
displayNum.textContent = newDisplay;
}

let storeValue = () => {
    storedValue = parseInt([...currentValue].join(""));
    currentValue.splice(0, currentValue.length);
}

input.addEventListener("click", (e) => {
    if(e.target.className === "numinput" || e.target.parentElement.className === "numinput"){

        currentValue.push(e.target.textContent);

        updateDisplay();
    }
});


plusButton.addEventListener("click", () => {
    storeValue();
    operand = add;
})

 equalsButton.addEventListener("click", () => {

        let result = operate(storedValue, parseInt(currentValue.join("")), operand)

        storedValue = result;
        displayNum.textContent = result;
 });