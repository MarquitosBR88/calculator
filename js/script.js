//Clicked button
let clicked = document.querySelectorAll(".number");
//The final number before clicking the operator
let input = ""
//Clicked operator
let operator = document.querySelectorAll(".add, .subtract, .multiply, .divide, .equals")
let firstNum
let secondNum
let result = 0
let displayValue = document.querySelector(".display")
//Operator of the problem (the operator of the actual operation)
let problemOperator = ""

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

clicked.forEach((button) => {   
    button.addEventListener("click", () => {
        
        //These three lines of code represents the number resetting when the user clicks on a number, to avoid appending the clicked number to 0 or to the result
        displayValue.textContent = ""
        clicked = button.textContent;
        //The input is the final number, while clicked only represents the number that you click on the time, so every number clicked appends to the input
        input += clicked;
        
        if (clicked === "C") {
            clear();
        }
        

        //Don't append the operator with the number
        if ((clicked === "0" || clicked === "1" || clicked === "2" || clicked === "3" || clicked === "4" || clicked === "5" || clicked === "6" || clicked === "7" || clicked === "8" || clicked === "9")) {
            displayValue.textContent = input;
        }
    })
});

function operatorFn() {
    operator.forEach((operation) => {   
        operation.addEventListener("click", () => {
            operator = operation.textContent;
            //The first number will only be modified for being the same as the displayValue on the first operation, after cleaning or after clicking on the equal button.
            //This is why the first number only turns into a number on this if, because after the if clause, the first number will always be a number and will always be the same as result, for accumulative operations, until the equal button is pressed.
            //This was made to avoid problems in the accumulative operations (example: 2 + 2 - 3 * 5), and only the second number will be the input after the first operation.
            if (typeof(firstNum) !== "number") {
                firstNum = displayValue.textContent
                firstNum = parseInt(firstNum)
                problemOperator = operator
                result = firstNum
                displayValue.textContent = result
            } else {
                secondNum = displayValue.textContent
                secondNum = parseInt(secondNum)
                result = operate(problemOperator, firstNum, secondNum)
                displayValue.textContent = result
                firstNum = result
            }

            if (operator !== "=") {
                problemOperator = operator
            } else {
                firstNum = ""
            }

            //Resets the input after each operator button is clicked
            displayValue.textContent = result
            input = ""

            
        });
    });
};


function clear() {
    displayValue.textContent = 0
    firstNum = ""
    operator = document.querySelectorAll(".add, .subtract, .multiply, .divide, .equals")
    secondNum = ""
    clicked = document.querySelectorAll(".number")
    problemOperator = ""
    result = 0
    input = ""

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