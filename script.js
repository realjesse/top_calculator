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
        // Check if the first number is zero, if so replace value
        if (stringFormattedCurrentFirstNum === "0") {
            stringFormattedCurrentFirstNum = symbol;
        }
        else {
            stringFormattedCurrentFirstNum += symbol;
        }
    }
    // If operator, then edit second number
    else {
        stringFormattedCurrentSecondNum += symbol;
    }
    updateDOM();
}

function updateCurrentOperator(operator) {
    // Edit to remove check, will always have a number
    if (stringFormattedCurrentFirstNum.length > 0) {
        currentOperator = operator;
        updateDOM();
    }
}

function operate() {
    // Check if there is a valid expression, implicitly must be if the second
    // number is greater than 0
    if (stringFormattedCurrentSecondNum.length > 0) {
        // Check operator symbol
        switch (currentOperator) {
            case "+":
                // Do the mathematical operation
                const floatFormattedCurrentFirstNum = parseFloat(stringFormattedCurrentFirstNum);
                const floatFormattedCurrentSecondNum = parseFloat(stringFormattedCurrentSecondNum);
                const total = floatFormattedCurrentFirstNum + floatFormattedCurrentSecondNum;

                // Update previous (above) values
                stringFormattedPreviousFirstNum = stringFormattedCurrentFirstNum;
                previousOperator = currentOperator;
                stringFormattedPreviousSecondNum = stringFormattedCurrentSecondNum;

                // Update current values
                stringFormattedCurrentFirstNum = total.toString();
                currentOperator = "";
                stringFormattedCurrentSecondNum = "";

                updateDOM();
                
                break;
            case "-":
                break;
            case "&times;":
                break;
            case "&times;":
                break;
        }
    }
    return;
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