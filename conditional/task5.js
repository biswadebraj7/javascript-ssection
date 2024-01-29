/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1=parseInt(prompt("please enter your num1"));

const num2=parseInt(prompt("please enter your num2"));

if(num1 >num2){
    result=num1*2
    alert("result will be double of num1:"+result);
}else{
    results=num1+num2;
    alert("the value of the variable result will be the sum of num1 and num2:"+results);
}
