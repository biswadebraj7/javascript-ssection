/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const point=parseInt(prompt("Please Enter your Number "));
if( point >=80){
    alert("we go for a lunch.");
} else if(point>=79 ||  point>=60){
    alert("good luck next time")
}else if(point>=59 || point >=40){
    alert("keep your friend's message unseen.");

}else{
    alert("block your friend");
}