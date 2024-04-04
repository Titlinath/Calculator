let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
    currentNumber += number;
    document.getElementById('display').value = currentNumber;
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') calculateResult();
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let result = 0;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current == 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
    }
    currentNumber = result.toString();
    document.getElementById('display').value = currentNumber;
    operator = null;
    previousNumber = '';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    document.getElementById('display').value = '';
}
