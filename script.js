// A better way might be doing an actual number var which holds the first num and then another for second one,
// instead of working with holding everything in a list.  Then have logic to do things when operators are clicked

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
        updateCurrentExpressionArray("1");
    }
    else if (id === "2") {
        updateCurrentExpressionArray("2");
    }
    else if (id === "3") {
        updateCurrentExpressionArray("3");
    }
    else if (id === "4") {
        updateCurrentExpressionArray("4");
    }
    else if (id === "5") {
        updateCurrentExpressionArray("5");
    }
    else if (id === "6") {
        updateCurrentExpressionArray("6");
    }
    else if (id === "7") {
        updateCurrentExpressionArray("7");
    }
    else if (id === "8") {
        updateCurrentExpressionArray("8");
    }
    else if (id === "9") {
        updateCurrentExpressionArray("9");
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