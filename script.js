const calculatorNode = document.querySelector("#calculator");
const currentExpressionNode = document.querySelector(".current");

// Holds values for calculation
let stringFormattedCurrentFirstNum = "";
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
            updateCurrentOperator("÷");
            break;
        case "multiply":
            updateCurrentOperator("×");
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
            break;
    }
}

function updateCurrentNumber(symbol) {
    if (currentOperator.length === 0) {
        stringFormattedCurrentFirstNum += symbol;
    }
    else {
        stringFormattedCurrentSecondNum += symbol;
    }
    updateDOM();
}

function updateCurrentOperator(operator) {
    if (stringFormattedCurrentFirstNum.length > 0) {
        currentOperator = operator;
        updateDOM();
    }
}

function updateDOM() {
    currentExpressionNode.textContent = stringFormattedCurrentFirstNum + currentOperator + stringFormattedCurrentSecondNum;
}