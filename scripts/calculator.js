// document.getElementById('seven').addEventListener("click", function() {
//     let x = document.getElementById('seven').value;
//     document.getElementById('calculator-screen').value = x;
// })
// document.getElementById('eight').addEventListener("click", function() {
//     let x = document.getElementById('eight').value;
//     document.getElementById('calculator-screen').value = x;
// })
// document.getElementById('nine').addEventListener("click", function() {
//     let x = document.getElementById('nine').value;
//     document.getElementById('calculator-screen').value = x;
// })
"use strict"
// let a = 0;
// let result = '';
// let operator = '';

// function onNumberClick(el) {
//     let value = el.value;
//     let currentNumber = Number(a + value);
//     if (!isNaN(currentNumber)) {
//         a = currentNumber;
//         console.log('number2 ' + a);
//         console.log('number1 ' + result);
//         printToScreen(currentNumber);
//     }
// }

// function printToScreen(value) {
//     let screen = document.getElementById('calculator-screen');
//     screen.innerHTML = value;
// }

// function onClearScreen() {
//     result = '';
//     a = 0;
//     operator = '';
//     printToScreen('0');
// }

// function onOperationClick(el) {
//     let op = el.value;
//     console.log(op);

//     if (op !== '=') {
//         operator = op;
//         result = a;
//         a = 0;
//         return;
//     }
//     switch (operator) {
//         case '=':
//             result = Number(result) + Number(a);
//             console.log(result);
//             printToScreen(result);
//             break;
//         case "+":
//             result = Number(result) + Number(a);
//             break;
//         case "-":
//             result = Number(result) - Number(a);
//             break;
//         case "*":
//             result = Number(result) * Number(a);
//             break;
//         case "/":
//             result = Number(result) / Number(a);
//             break;
//     }
//     printToScreen(result);
// }

class Calculator {

    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }


    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;

    }


    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.'))
            return
        this.currentOperand = this.currentOperand.toString() + number.toString();

    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';


    }

    compute() {
        let theCompute;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {

            case '+':
                theCompute = prev + current;
                break
            case '-':
                theCompute = prev - current;
                break
            case '*':
                theCompute = prev * current;
                break
            case '/':
                theCompute = prev / current;
                break
            default:
                return
        }
        this.currentOperand = theCompute;
        this.operation = undefined;
        this.previousOperand = '';
    }





    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;

        this.previousOperandTextElement.innerText = this.previousOperand;


    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-allclear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})