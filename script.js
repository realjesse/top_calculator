const calculatorNode = document.querySelector("#calculator");
let currentExpressionArray = [];

calculatorNode.addEventListener('click', event => {
    if (event.target.classList.contains("button")) {
        console.log("button click!");
    }
})

function checkEventId(event) {
    id = event.target.id;
    if (id === "0") {
        null
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
    null
}

function updateDom() {
    null
}