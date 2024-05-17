let firstNum = document.querySelectorAll("button")
let operator = document.querySelectorAll(".add, .subtract, .multiply, .divide, .equals")
let secondNum = document.querySelectorAll("button")
let displayValue = document.querySelector(".display")
let verify = 0
let problemOperator = ""

start()
operatorFn()

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

function start() {
    if (typeof (firstNum) !== "number") {
        firstNumFn()
    } else {
        secondNumFn()
    }
}


function firstNumFn() {
    firstNum.forEach((button) => {   
        button.addEventListener("click", () => {
            //Only change firstNum variable before the operatorFn call
            if (typeof (firstNum) !== "number") {
                firstNum = button.textContent
            }
            if (firstNum === "C") {
                displayValue.textContent = "0"
            //Don't append the input with 0
            } else if (displayValue.textContent === "0") { 
                displayValue.textContent = ""
            } 
            
            //Don't append the operator with the number
            //Also made the verify variable to only append the number into the display before the operatorFn call
            if ((firstNum === "0" || firstNum === "1" || firstNum === "2" || firstNum === "3" || firstNum === "4" || firstNum === "5" || firstNum === "6" || firstNum === "7" || firstNum === "8" || firstNum === "9") && (typeof (verify) !== "string")) {
                displayValue.textContent += firstNum
            }
        });
    });
}

function operatorFn() {
    operator.forEach((button) => {   
        button.addEventListener("click", () => {
            operator = button.textContent
            if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
                //Saves the input on the firstNumber variable after an operator is clicked
                firstNum = displayValue.textContent
                firstNum = parseInt(firstNum)
                problemOperator = operator
                displayValue.textContent = "0"
                start()
            } else if (operator === "=") {
                secondNum = displayValue.textContent
                secondNum = parseInt(secondNum)
                displayValue.textContent = operate(problemOperator, firstNum, secondNum)
            }
        });
    });
}

function secondNumFn() {
    secondNum.forEach((button) => {
        //When the function is called, verify will instantly be a string, which will negate the if clause in the firstNum function when a button is clicked, and the numbers will not be repeated   
        verify = button.textContent
        button.addEventListener("click", () => {
            secondNum = button.textContent
            if (secondNum === "C") {
                displayValue.textContent = "0"
                firstNum = document.querySelectorAll("button")
                operator = document.querySelectorAll(".add, .subtract, .multiply, .divide")
                secondNum = document.querySelectorAll("button")
                start()
            } else if (displayValue.textContent === "0") {
                displayValue.textContent = ""
            }

            if (secondNum === "0" || secondNum === "1" || secondNum === "2" || secondNum === "3" || secondNum === "4" || secondNum === "5" || secondNum === "6" || secondNum === "7" || secondNum === "8" || secondNum === "9")  {
                displayValue.textContent += secondNum
            }
            console.log(firstNum)
            console.log(operator)
            console.log(secondNum)
                
        });
    });
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