/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const option=prompt("child=1, studnet=2,citizen=3 and other=4");
const age=prompt("Please Enter your age Number");
const person=prompt("who are you")
const price=800;
 const childprice=price*0;
 const student=price/2;
 const S_citizens=(price *15)/100;
 const discount=price-S_citizens;
 

if(age <10 && price =='child'){
    alert("children tricket is Free :"+childprice+"taka");
}else if(person =='student'){
    alert("Students get a 50% discount"+student);

}
else if(age >=60 || person =='citizen' ){
    alert("Senior citizens  gets a 15% Discount"+discount);

}
else{
    alert("you have pay regular Price 800 taka"+price);
}