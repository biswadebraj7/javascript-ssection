/**
 * Task-4
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
 * *********************************
In JavaScript NaN is short for "Not-a-Number".

The isNaN() method returns true if a value is NaN.

The isNaN() method converts the value to a number before testing it.
isNaN() method returns true if a value is Not-a-Number.

Number.isNaN() returns true if a number is Not-a-Number.

******************************************
 * ** */
var a = isNaN(‘11’);
console.log("the result will be showed:"+a);this 
var b = isNaN(2-10);
console.log("the result will be showed:"+b); //the result will be showed flase.beasuse it is ilgal  number;
