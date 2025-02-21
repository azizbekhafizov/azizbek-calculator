let display = document.getElementById("display");
let shouldResetDisplay = false;

function clearDisplay() {
    display.value = "";
    shouldResetDisplay = false;
}

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    } else {
        display.value += number;
    }
}

function appendOperator(operator) {
    if (display.value !== "" && !shouldResetDisplay) {
        display.value += operator;
        shouldResetDisplay = false;
    }
}

function calculateResult() {
    try {
        display.value = new Function("return " + display.value)();
        shouldResetDisplay = true;
    } catch {
        display.value = "Error";
        shouldResetDisplay = true;
    }
}


function appendOperator(operator) {
    let lastChar = display.value.slice(-1);
    
    if (display.value !== "" && !shouldResetDisplay && !isNaN(lastChar)) {
        display.value += operator;
        shouldResetDisplay = false;
    }
}
