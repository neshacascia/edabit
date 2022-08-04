//Less Than, Greater Than:
//Create a function that takes two numbers num1, num2, and an array arr and returns an array
// containing all the numbers in arr greater than num1 and less than num2.

function arrBetween(num1, num2, arr) {
  return arr.filter(num => num > num1 && num < num2);
}
