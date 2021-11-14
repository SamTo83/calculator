# calculator

My calculator can perform the 

Started off with query selectors to and my variables.

made my display div's viewable whenever I click on the string.

follow with when inputting the next string it will show on the top display.

The mathOperation function allows the string to be calculated using the parseFloat to convert the string into a floating point number

As I made the display numbers as a string, the dot will continously input on the calculator display. To prevent this from happening, I need to action a event listener to prevent the doc displaying more than once.
By using the boolean action if display has dot, it will become false and stops it from entering another.

Equal button returns the calculation and input the results.

By using the slice function, Delete button removes the last number displayed in the input display.

Clear button removes all displayed and inputs a zero on the secondary display.