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
            updateCurrentExpression("0");
            break;
        case "1":
            updateCurrentExpression("1");
            break;
        case "2":
            updateCurrentExpression("2");
            break;
        case "3":
            updateCurrentExpression("3");
            break;
        case "4":
            updateCurrentExpression("4");
            break;
        case "5":
            updateCurrentExpression("5");
            break;
        case "6":
            updateCurrentExpression("6");
            break;
        case "7":
            updateCurrentExpression("7");
            break;
        case "8":
            updateCurrentExpression("8");
            break;
        case "9":
            updateCurrentExpression("9");
            break;
    }
}

function updateCurrentExpression(symbol) {
    stringFormattedCurrentFirstNum += symbol;
    updateDOM();
}

function updateDOM() {
    currentExpressionNode.textContent = stringFormattedCurrentFirstNum;
}