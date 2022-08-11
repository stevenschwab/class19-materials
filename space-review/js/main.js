//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arrOfNumbers = [10, 100, 245, 150, 99];
let sum = arrOfNumbers.reduce((acc, cv) => acc + cv, 0);
alert(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = arrOfNumbers.map(num => Math.pow(num, 2));
console.log(newArr);
//Create a function that takes string
//Print the reverse of that string to the console
function printsReverseOfString(aStr){
    console.log( aStr.split("").reverse().join("") )
}
printsReverseOfString('A toad jumped over the crazy cat');
//Create a function that takes in a string
//Alert if the string is a palindrome or not
let palindromeChecker = str => str === str.split("").reverse().join("");