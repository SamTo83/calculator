const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.all-clear');
const del = document.querySelector('.delete');

let displayNum1 = '';
let displayNum2 = '';
let result = '';
let lastOperator = '';
let hasDot = false;
let currentValue = '';



// To display the operators on display
operator.forEach( action => {
  action.addEventListener('click', (e)=> {
    if (!displayNum2) return;
    hasDot = false;
    const key = e.target.innerText;
    if (displayNum1 && displayNum2 && lastOperator ){
      mathOperation()
    } else {
      result = parseFloat(displayNum2);
    }
    clearResult(key);
    lastOperator = key;
  })
})
// moving the first input to the top display
function clearResult(name = ''){
  displayNum1 += displayNum2 + ' ' + name;
  display1.innerText = displayNum1;
  display2.innerText = '';
  displayNum2 = '';
};
// this function allows to calculate the inputs 
function mathOperation(){
  if(lastOperator === 'x'){
    result = parseFloat(result) * parseFloat(displayNum2);
  } else if (lastOperator === '+'){
    result = parseFloat(result) + parseFloat(displayNum2);
  } else if (lastOperator === '-'){
    result = parseFloat(result) - parseFloat(displayNum2);
  } else if (lastOperator === '÷'){
    result = parseFloat(result) / parseFloat(displayNum2);
  } 
};
// To allow the decimal to only use once
numbers.forEach (number => {
  number.addEventListener('click', (e) => {
    if( e.target.innerText === '.' && !hasDot){
      hasDot = true;
    } else if (e.target.innerText === '.' && hasDot) {
      return;
    }
    displayNum2 += e.target.innerText;
    display2.innerText = displayNum2;
  })
});
// The equal operator to set the total
equal.addEventListener('click', (e)=> {
  if( !displayNum1 || !displayNum2 ) return;
  hasDot = false;
  mathOperation();
  clearResult();
  display2.innerText = result;
  displayNum2 = result;
  displayNum1 = '';
})
// Delete button operator
del.addEventListener('click', (e) => {
  display2.innerText = display2.innerText.slice(0, -1);
  

  // displayNum1 = '';
  // displayNum2 = result;
})
// To able to use clear button and delete all input and set display back to zero
clear.addEventListener('click', (e) => {
  display1.innerText = '';
  display2.innerText = '0';
  displayNum1 = '';
  displayNum2 = '';
  result = '';
})



