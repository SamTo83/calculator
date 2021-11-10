"use strict";

var numberButtons = document.querySelectorAll('[data-number]');
var operationButtons = document.querySelectorAll('[data-operation]');
var equalsButton = document.querySelector('[data-equals]');
var deleteButton = document.querySelector('[data-delete]');
var allClearButton = document.querySelector('[data-all-clear]');
var previousOperand = document.querySelector('[data-previous-operand]');
var currentOperand = document.querySelector('[data-current-operand]');
var calculator = new Calculator(previousOperand, previousOperand);
numberButtons.forEach(function (numberButtons) {
  numberButtons.addEventListener('click', function () {
    calculator.previousOperand(button.innerText);
    calculator.currentOperand();
  });
});