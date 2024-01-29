/***4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not. */

const list=["Hi","Hello",5,6,7,97,"how","what"];
if(Array.isArray(list)){
    console.log("this is array")
}else{
    console.log("not arraya")
}