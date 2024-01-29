/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const Number=parseInt(prompt("Enter your Number:"));
if(Number >=90){
    alert("you have got A+");

}
 else if(Number >=80){
    alert("You have got to B")
 }
 else if(Number >=70){
    alert("you have got C")
 }
 else if(Number >=60){
    alert("You have got D")
 }
 else{
    alert("Sorry .YOu are Failed ?");
 }