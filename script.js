const calculatorNode = document.querySelector("#calculator");
const currentExpressionNode = document.querySelector(".current");
let currentExpressionArray = [];

calculatorNode.addEventListener('click', checkEventId)

function checkEventId(event) {
    id = event.target.id;
    if (id === "0") {
        updateCurrentExpressionArray("0");
    }
    else if (id === "1") {
        null
    }
    else if (id === "2") {
        null
    }
    else if (id === "3") {
        null
    }
    else if (id === "4") {
        null
    }
    else if (id === "5") {
        null
    }
    else if (id === "6") {
        null
    }
    else if (id === "7") {
        null
    }
    else if (id === "8") {
        null
    }
    else if (id === "9") {
        null
    }
}

function updateCurrentExpressionArray(symbol) {
    currentExpressionArray.push(symbol);
    updateDOM();
}

function updateDOM() {
    stringFormattedExpression = "";
    currentExpressionArray.forEach((symbol) => {
        stringFormattedExpression += symbol;
    })

    currentExpressionNode.textContent = stringFormattedExpression;
}