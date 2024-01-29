/***3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not. */

const book1=["javabook","c-book","C++book","python-book","javascript"];


if(book1.includes('javascript')){
    console.log("Here are include javascript book");
    console.log(book1)

}else{
    console.log(book1);
}
