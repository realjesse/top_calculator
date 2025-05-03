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
    if (id === "0") {
        updateCurrentExpression("0");
    }
    else if (id === "1") {
        updateCurrentExpression("1");
    }
    else if (id === "2") {
        updateCurrentExpression("2");
    }
    else if (id === "3") {
        updateCurrentExpression("3");
    }
    else if (id === "4") {
        updateCurrentExpression("4");
    }
    else if (id === "5") {
        updateCurrentExpression("5");
    }
    else if (id === "6") {
        updateCurrentExpression("6");
    }
    else if (id === "7") {
        updateCurrentExpression("7");
    }
    else if (id === "8") {
        updateCurrentExpression("8");
    }
    else if (id === "9") {
        updateCurrentExpression("9");
    }
}

function updateCurrentExpression(symbol) {
    stringFormattedCurrentFirstNum += symbol;
    updateDOM();
}

function updateDOM() {
    currentExpressionNode.textContent = stringFormattedCurrentFirstNum;
}