// This file contains the JavaScript code for the calculator functionality.
// It includes functions to handle user input, perform calculations, and update the display.

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === 'C') {
                clear();
            } else if (value === '=') {
                calculate();
            } else {
                handleInput(value);
            }
        });
    });

    function handleInput(value) {
        if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
            updateDisplay(currentInput);
        }
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

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
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay(currentInput);
    }

    function clear() {
        currentInput = '';
        operator = '';
        previousInput = '';
        updateDisplay('0');
    }

    function updateDisplay(value) {
        display.textContent = value;
    }
});