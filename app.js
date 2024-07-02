const keys = document.querySelectorAll(".key");
const display = document.querySelector("#display");

function displayFun() {
    let keyPressed = this.innerText;
    let displayStr = display.innerText;
    console.log(`key: ${keyPressed}`);
    console.log("key pressed");

    if (keyPressed === '=') {
        displayStr = displayStr.replace('×', '*').replace('÷', '/');

        console.log(displayStr);
        display.innerText = eval(displayStr);
    } else if (keyPressed === 'DEL') {
        display.innerText = displayStr.slice(0, displayStr.length - 1);
    } else if (keyPressed === 'AC') {
        display.innerText = "";
    } else {
        display.innerText += keyPressed;
    }
}

for (let key of keys) {
    key.addEventListener("click", displayFun);
}

console.log("app.js is linked");
