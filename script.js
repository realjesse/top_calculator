const calculatorNode = document.querySelector("#calculator");

calculatorNode.addEventListener('click', event => {
    if (event.target.classList.contains("button")) {
        console.log("button click!");
    }
})