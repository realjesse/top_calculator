const calculatorNode = document.querySelector("#calculator");
const currentFirstNumNode = document.querySelector(".currentFirstNum");
const currentOperatorNode = document.querySelector(".currentOperator");
const currentSecondNumNode = document.querySelector(".currentSecondNum");
const previousFirstNumNode = document.querySelector(".previousFirstNum");
const previousOperatorNode = document.querySelector(".previousOperator");
const previousSecondNumNode = document.querySelector(".previousSecondNum");
const backspaceNode = document.querySelector("#ac");


// Holds values for calculation
let stringFormattedCurrentFirstNum = "0";
let currentOperator = "";
let stringFormattedCurrentSecondNum = "";
let stringFormattedPreviousFirstNum = "";
let previousOperator = "";
let stringFormattedPreviousSecondNum = "";

calculatorNode.addEventListener('click', checkEventId)
document.addEventListener('keydown', checkEventId)

function checkEventId(event) {
    let id = null;
    if (event.type === "click") {
        id = event.target.id;
    }
    else if (event.type === "keydown") {
        id = event.key;
    }

    switch (id) {
        case "0":
            updateCurrentNumber("0");
            break;
        case "1":
            updateCurrentNumber("1");
            break;
        case "2":
            updateCurrentNumber("2");
            break;
        case "3":
            updateCurrentNumber("3");
            break;
        case "4":
            updateCurrentNumber("4");
            break;
        case "5":
            updateCurrentNumber("5");
            break;
        case "6":
            updateCurrentNumber("6");
            break;
        case "7":
            updateCurrentNumber("7");
            break;
        case "8":
            updateCurrentNumber("8");
            break;
        case "9":
            updateCurrentNumber("9");
            break;
        case "ac":
            // Check if there is a previous expression, if so, allow user to clear it
            // Or if the expression is 0, catch and allow to clear
            if (stringFormattedPreviousFirstNum.length > 0 || stringFormattedCurrentFirstNum === "0") {
                clearValues();
            }
            // If there an expression in the making, then allow backspace functionality
            else {
                backspace();
            }
            break;
        case "switch_sign":

            break;
        case "percent":
            break;
        case "divide":
            updateCurrentOperator("&divide;");
            break;
        case "multiply":
            updateCurrentOperator("&times;");
            break;
        case "subtract":
            updateCurrentOperator("-");
            break;
        case "add":
            updateCurrentOperator("+");
            break;
        case "dot":
            updateCurrentNumber(".");
            break;
        case "equal":
            operate();
            break;
        // Keyboard inputs
        case "Backspace":
            backspace();
            break;
        case "Enter":
            operate();
            break;
        case ".":
            updateCurrentNumber(".");
            break;
        case "+":
            updateCurrentOperator("+");
            break;
        case "-":
            updateCurrentOperator("-");
            break;
        case "*":
            updateCurrentOperator("&times;");
            break;
        case "x":
            updateCurrentOperator("&times;");
            break;
        case "/":
            updateCurrentOperator("&divide;");
            break;
    }
}

function updateCurrentNumber(symbol) {
    // If there is a previous expression and no current operator, clear all values
    if (stringFormattedPreviousFirstNum.length > 0 && currentOperator.length === 0) {
        clearValues();
    }

    // Check if there is an operator, if not edit first number
    if (currentOperator.length === 0) {
        // If the first number already has a period, then exit function
        if (symbol === "." && stringFormattedCurrentFirstNum.includes(".")) {
            return;
        }

        // Check if the first number is zero or undefined, if so replace value
        if (stringFormattedCurrentFirstNum === "0" || stringFormattedCurrentFirstNum === "Undefined") {
            // Update AC symbol to become backspace
            toggleBackspaceSymbol();

            // If adding a period, then keep 0 and append period
            if (symbol === ".") {
                stringFormattedCurrentFirstNum += ".";
            }
            // Else, replace number
            else {
                stringFormattedCurrentFirstNum = symbol;
            }
        }
        // If there is a number present, simply append
        else {
            stringFormattedCurrentFirstNum += symbol;
        }
    }
    // If operator, then edit second number
    else {
        // If the second number already has a period, then exit function
        if (symbol === "." && stringFormattedCurrentSecondNum.includes(".")) {
            return;
        }

        stringFormattedCurrentSecondNum += symbol;
    }
    updateDOM();
}

function updateCurrentOperator(operator) {
    // If first number is Undefined, then do not change operator, simply exit
    if (stringFormattedCurrentFirstNum === "Undefined") {
        return;
    }
    // If there is previous expression, clear it all values but save current first num
    if (stringFormattedPreviousFirstNum.length > 0) {
        // Update AC symbol to become backspace
        toggleBackspaceSymbol();
        const copyOfStringFormattedCurrentFirstNum = stringFormattedCurrentFirstNum;
        clearValues();
        stringFormattedCurrentFirstNum = copyOfStringFormattedCurrentFirstNum;
    } 

    currentOperator = operator;
    updateDOM();
}

function operate() {
    // Check if there is a valid expression, implicitly must be if the second
    // number is greater than 0
    if (stringFormattedCurrentSecondNum.length > 0) {
        let total = 0;
        const [floatFormattedCurrentFirstNum, floatFormattedCurrentSecondNum] = 
        convertTwoVarsToFloat(stringFormattedCurrentFirstNum, stringFormattedCurrentSecondNum);

        // Check operator symbol
        switch (currentOperator) {
            case "+":
                total = floatFormattedCurrentFirstNum + floatFormattedCurrentSecondNum;
                break;
            case "-":
                total = floatFormattedCurrentFirstNum - floatFormattedCurrentSecondNum;
                break;
            case "&times;":
                total = floatFormattedCurrentFirstNum * floatFormattedCurrentSecondNum;
                break;
            case "&divide;":
                // Check if they divided by 0
                if (floatFormattedCurrentSecondNum === 0) {
                    total = "Undefined";
                }
                else {
                    total = floatFormattedCurrentFirstNum / floatFormattedCurrentSecondNum;
                }
                break;
        }

        // Update backspace to become AC
        toggleBackspaceSymbol();

        updatePreviousValues();
        updateCurrentExpression(total);
        updateDOM();
    }
    return;
}

// Always use before updateCurrentExpression()
// Used after an operation
function updatePreviousValues() {
    stringFormattedPreviousFirstNum = stringFormattedCurrentFirstNum;
    previousOperator = currentOperator;
    stringFormattedPreviousSecondNum = stringFormattedCurrentSecondNum;
}

// Always use after updatePreviousValues()
// Used after an operation
function updateCurrentExpression(total) {
    stringFormattedCurrentFirstNum = total.toString();
    currentOperator = "";
    stringFormattedCurrentSecondNum = "";
}

function convertTwoVarsToFloat(variableOne, variableTwo) {
    return [parseFloat(variableOne), parseFloat(variableTwo)];
}

function clearValues() {
    stringFormattedCurrentFirstNum = "0";
    currentOperator = "";
    stringFormattedCurrentSecondNum = "";
    stringFormattedPreviousFirstNum = "";
    previousOperator = "";
    stringFormattedPreviousSecondNum = "";

    updateDOM();
}

function backspace() {
    // If there are previous values, clear all values
    if (stringFormattedPreviousFirstNum.length > 0) {
        clearValues();
    }

    // Else, delete numbers/operator one by one, right to left
    else {
        if (stringFormattedCurrentSecondNum.length > 0) {
        stringFormattedCurrentSecondNum = stringFormattedCurrentSecondNum.slice(0, -1);
        }
        else if (currentOperator != "") {
            currentOperator = "";
        }
        else {
            stringFormattedCurrentFirstNum = stringFormattedCurrentFirstNum.slice(0, -1);
            if (stringFormattedCurrentFirstNum.length === 0) {
                stringFormattedCurrentFirstNum = "0";
                // Update backspace to become AC
                toggleBackspaceSymbol();
            }
        }
    }

    updateDOM();
}

function toggleBackspaceSymbol() {
    if (backspaceNode.textContent === "AC") {
        // Update AC symbol to become backspace
        backspaceNode.textContent = "\u232B";
        backspaceNode.style.fontSize = "3rem";
    }
    else {
        // Update backspace to become AC
        backspaceNode.textContent = "AC";
        backspaceNode.style.fontSize = "2rem";
    }
}

function updateDOM() {
    // Update current expression DOM
    currentFirstNumNode.textContent = stringFormattedCurrentFirstNum;
    currentOperatorNode.innerHTML = `<span style='font-size: 3rem'>${currentOperator}</span>`;
    currentSecondNumNode.textContent = stringFormattedCurrentSecondNum;

    // Update previous expression DOM
    previousFirstNumNode.textContent = stringFormattedPreviousFirstNum;
    previousOperatorNode.innerHTML = `<span style='font-size: 2rem'>${previousOperator}</span>`;
    previousSecondNumNode.textContent = stringFormattedPreviousSecondNum;
}