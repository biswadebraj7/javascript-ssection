/**
 * Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
 * ** */

var Mathematics=72;
var Biology=25;
var Chemistry=65;
var Physics=80;
var Bangla =90;
var total=Mathematics+Biology+Chemistry+Physics+Bangla;
var  average=total/ 5;
console.log("the average marks "+average.toFixed(2)+"Taka.")