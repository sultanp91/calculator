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

let storedValue = [];
let currentValue = [];

let input = document.querySelector(".input");
let displayNum  = document.querySelector("#display");
let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide")
let equalsButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");
let deleteButton = document.querySelector("#delete");
let decimalButton = document.querySelector("#decimal");


let updateDisplay = () =>{
    if(currentValue.length >= 1){
        let newDisplay = parseFloat(currentValue.join(""))
        displayNum.textContent = newDisplay;
    }
} 




let storeValue = () => {
    if(storedValue.length === 0){
    storedValue = parseFloat([...currentValue].join(""));
    currentValue.splice(0, currentValue.length);
}
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

minusButton.addEventListener("click", () => {
    storeValue();
    operand = subtract;
})

multiplyButton.addEventListener("click", () => {
    storeValue();
    operand = multiply;
})

divideButton.addEventListener("click", () => {
    storeValue();
    operand = divide;
    
})

 equalsButton.addEventListener("click", () => {
     if(currentValue.length > 0 && storedValue >= 0){
        if(parseInt(currentValue.join("")) === 0 && operand === divide){
            displayNum.textContent = "Don't divide by ZERO!!!"
            currentValue.splice(0, currentValue.length);
            storedValue = [];
        } else{
        let result = operate(storedValue, parseInt(currentValue.join("")), operand)
        storedValue = result;
        currentValue.splice(0, currentValue.length);
        displayNum.textContent = result;
    }
    }
 });

 clearButton.addEventListener("click", () => {
    currentValue.splice(0, currentValue.length);
    storedValue = [];
    displayNum.textContent = "0"
 })

 deleteButton.addEventListener("click", () => {
     
    if(currentValue.length === 1){
        currentValue.pop();
        displayNum.textContent = ""
    } else if(currentValue.length > 1){
        currentValue.pop();
        updateDisplay();
     }  
 })

decimalButton.addEventListener("click", () => {
    if(currentValue.indexOf(".") === -1){
        currentValue.push(".");
        console.log(currentValue);
        updateDisplay();
    }
})