const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const tempResult = document.querySelector('.temp-result');
const numbers = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.all-clear');
const del = document.querySelector('.delete');

let displayNum1 = '';
let displayNum2 = '';
let result = '';
let lastDigit = '';
let hasDot = false;

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

operation.forEach( action => {
  action.addEventListener('click', (e)=> {
    if (!displayNum2) return;
    hasDot = false;
    const key = e.target.innerText;
    if (displayNum1 && displayNum2 && lastDigit){
      mathOperation()
    } else {
      result = parseFloat(displayNum2);
    }
    clearResult(key);
  })
})

function clearResult(name = ''){
  displayNum1 += displayNum2 + ' ' + name + ' ';
  display1.innerText = displayNum1;
  display2.innerText = '';
  displayNum2 = '';
};

function mathOperation(){
  if(lastOperation === 'x'){
    result = parseFloat(result) * parseFloat(displayNum2);
  } else if (lastDigit === '+'){
    result = parseFloat(result) + parseFloat(displayNum2);
  } else if (lastDigit === '-'){
    result = parseFloat(result) - parseFloat(displayNum2);
  } else if (lastDigit === '÷'){
    result = parseFloat(result) / parseFloat(displayNum2);
  } 
};

equal.addEventListener('click', (e)=> {
  if( !displayNum1 || !displayNum2 ) return;
  hasDot = false;
  mathOperation();
  clearVar();
  display2.innerText = result;
  displayNum2 = result;
  displayNum1 = '';
})

clear.addEventListener('click', (e) => {
  display1.innerText = '';
  display2.innerText = '0';
  displayNum1 = '';
  displayNum2 = '';
  result = '';
})

// // issues
// del.addEventListener('click', (e) => {
//   // display2.innerText.slice(0, -1); 
// })

