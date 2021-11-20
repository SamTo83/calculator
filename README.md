<<<<<<< HEAD
# JavaScript Calculator 
[Check out the Live Demo Here](https://samto83.github.io/calculator/)

![Calculator](https://github.com/SamTo83/calculator/blob/main/calculator.PNG)

## The Design:
The Calculator was designed with a **mobile-first approach**, using a _css-grid_ layout and styled with a moon theme imagery.

## The Logic:
The calculator consists of:
- _A display section_ where users will be able to see the operations and their result
- _6 Operators:_ Addition, Subtraction, Multiplication, Division, Percentage, 
- _Numbers_ from 0 to 9
- _4 Additional buttons:_ 
    - _Equal_ button that will return the result of the operation
    - _Delete_ button to allow user to delete one or multiple digits
    - _Dot (.) button_ to allow user to use decimal units
    - _AC_ button to activate the function All Clear and allow user to reset the calculator

## The Code:
A function has been created to allow user to click on any operator to calculate the value.

``` function mathOperation(){
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
```
### Deleting the Values:
By using the slice function, Delete button removes the last number displayed in the input display.

``` del.addEventListener('click', (e) => {
  display2.innerText = display2.innerText.slice(0, -1);
})
```
### Decimal function:
To allow the decimal to display once, I used the a function to confirm if the dot has been used
``` numbers.forEach (number => {
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
```
