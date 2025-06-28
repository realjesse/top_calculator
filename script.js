const calculatorNode = document.querySelector("#calculator");
const currentFirstNumNode = document.querySelector(".currentFirstNum");
const currentOperatorNode = document.querySelector(".currentOperator");
const currentSecondNumNode = document.querySelector(".currentSecondNum");
const previousFirstNumNode = document.querySelector(".previousFirstNum");
const previousOperatorNode = document.querySelector(".previousOperator");
const previousSecondNumNode = document.querySelector(".previousSecondNum");


// Holds values for calculation
let stringFormattedCurrentFirstNum = "0";
let currentOperator = "";
let stringFormattedCurrentSecondNum = "";
let stringFormattedPreviousFirstNum = "";
let previousOperator = "";
let stringFormattedPreviousSecondNum = "";

calculatorNode.addEventListener('click', checkEventId)

function checkEventId(event) {
    id = event.target.id;

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
            clearValues();
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
    }
}

function updateCurrentNumber(symbol) {
    // Check if there is an operator, if not edit first number
    if (currentOperator.length === 0) {
        // If the first number already has a period, then exit function
        if (symbol === "." && stringFormattedCurrentFirstNum.includes(".")) {
            return;
        }

        // Check if the first number is zero or undefined, if so replace value
        if (stringFormattedCurrentFirstNum === "0" || stringFormattedCurrentFirstNum === "Undefined") {
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
    // If Undefined, then do not change operator, simply exit
    if (stringFormattedCurrentFirstNum === "Undefined") {
        return;
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