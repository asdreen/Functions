/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

console.log("/n------------------------Exercise 1--------------------- ")

function area (l1, l2) {
    console.log(l1 * l2);//The area of rectangle is: a*b
    console.log(2 * (l1 + l2));//The perimeter of rectangle is: 2 * (a + b)
}
 area(1, 2)


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("\n---------------Exercisde 2------------------")

function crazySum (x4, y8) {
  console.log(x4 + y8)  
}
crazySum(2, 6)



/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log("\n---------------Exercisde 4------------------")
function boundary(n) {
  return ((Math.abs(100 - n) <= 20) ||
	 (Math.abs(400 - n) <= 20));
}

console.log(boundary(10));
console.log(boundary(90));
console.log(boundary(99));
console.log(boundary(199));
console.log(boundary(200));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR ANSWER HERE */

  

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("\n---------------Exercisde 6------------------")
function check3and7(x = 2) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(check3and7(12));
console.log(check3and7(14));
console.log(check3and7(10));
console.log(check3and7(11));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("\n---------------Exercisde 7------------------")

function reverseString(str) 
{
    return str.split("").reverse().join("");
}

console.log(reverseString("Strive"));


/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("\n---------------Exercisde 8------------------")

function upperFirst(str) {
  const title = str
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  return title;
}
console.log(upperFirst('hello world and epicode'));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("\n---------------Exercisde 9------------------")

function cutString(str) {
  return str.substring(1, str.length - 1);
}
console.log(cutString('Asdren Jerliu'));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("\n---------------Exercisde 10------------------")

function giveMeRandom(n) {
  let arrWithNums = [];
  for(i = 0; i < n; i++) {
      arrWithNums.push(Math.floor(Math.random() * 10)); 
  }
  return arrWithNums;
}
console.log(giveMeRandom(8));

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
