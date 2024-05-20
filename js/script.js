//Clicked button
let clicked = document.querySelectorAll(".number, .decimal");
//The final number before clicking the operator
let input = "";
//Clicked operator
let operator = document.querySelectorAll(".add, .subtract, .multiply, .divide, .equals");
let firstNum;
let secondNum;
let result = 0;
let displayValue = document.querySelector(".display");
//Operator of the problem (the operator of the actual operation)
let problemOperator = "";
let decimalCounter = 0;

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
        
        //These two lines of code represents the number resetting when the user clicks on a number, to avoid appending the clicked number to 0 or to the result
        displayValue.textContent = "";
        clicked = button.textContent;
        if (clicked === ".") {
            //This if clause and decimalCounter variable was made to prevent multiple "." on the number
            if (decimalCounter === 0) {
                input += clicked;
                decimalCounter++;
            } 
        } else {
            //The input is the final number, while clicked only represents the number that you click on the time, so every number clicked appends to the input
            input += clicked;
        }
        
        if (clicked === "C") {
            clear();
        }
        

        //Don't append the operator with the number
        if ((clicked === "0" || clicked === "1" || clicked === "2" || clicked === "3" || clicked === "4" || clicked === "5" || clicked === "6" || clicked === "7" || clicked === "8" || clicked === "9" || clicked === ".")) {
            displayValue.textContent = input;
        } 
    })

});

//Keyboard support
document.addEventListener("keydown", (event) => { 
        
    if (event.key === ".") {
        if (decimalCounter === 0) {
            input += event.key;
            decimalCounter++;
        } 
    } else {
            input += event.key;
    }
        
        
    if (event.key === "Backspace") {
        clear();
    }
    
    if ((event.key === "0" || event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === ".")) {
        displayValue.textContent = "";
        displayValue.textContent = input;
    } else {
        //Don't append other characters that aren't numbers
        input = input.split("");
        input.splice(-1, 1);
        input = input.join("");
    }
});   

function operatorFn() {
    operator.forEach((operation) => {   
        operation.addEventListener("click", () => {
            operator = operation.textContent;
            /*The first number will only be modified for being the same as the displayValue on the first operation, after cleaning or after clicking on the equal button.
            This is why the first number only turns into a number on this if, because after the if clause, the first number will always be a number and will always be the same as result, for accumulative operations, until the equal button is pressed.
            This was made to avoid problems in the accumulative operations (example: 2 + 2 - 3 * 5), and only the second number will be the input after the first operation. */
            if (typeof(firstNum) !== "number") {
                firstNum = displayValue.textContent;
                firstNum = parseFloat(firstNum);
                problemOperator = operator;
                result = firstNum;
                result = Math.round((result + Number.EPSILON) * 100) / 100;
                displayValue.textContent = result;
            } else {
                secondNum = displayValue.textContent;
                secondNum = parseFloat(secondNum);
                result = operate(problemOperator, firstNum, secondNum);
                result = Math.round((result + Number.EPSILON) * 100) / 100;
                displayValue.textContent = result;
                firstNum = result;           
            }

            /*This if clause is to avoid the "=" operator to be the operator of the problem (for example, if after we use the "=" we try to divide the result to 2,
            this block of code will avoid the problemOperator be "=", causing bugs to the code), this will reset the first number as well, after clicking "=", the first number
            will be a string. */
            if (operator !== "=") {
                problemOperator = operator;
            } else {
                firstNum = "";
            }

            //Try dividing for 0
            if (secondNum === 0 && problemOperator === "/") {
                alert("R u dumb?");
                clear();
            }
                     
            //Resets the input after each operator button is clicked
            input = "";
            decimalCounter = 0;
          
        });
    });
};


function clear() {
    displayValue.textContent = 0;
    firstNum = "";
    operator = document.querySelectorAll(".add, .subtract, .multiply, .divide, .equals");
    secondNum = "";
    clicked = document.querySelectorAll(".number");
    problemOperator = "";
    result = 0;
    input = "";

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