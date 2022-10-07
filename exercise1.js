// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */
const firstarray = [1, 3, 5];
console.log("first array:", firstarray);

const reverted = firstarray.reverse();
console.log("reverted:", reverted);
console.log("first array:", firstarray);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
const max = Math.max(33, 45, 8, 123, 0, 113);
console.log(max);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
const min = Math.min(33, 45, 8, 123, 0, 113);
console.log(min);
/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */
const evenNum = [33, 45, 8, 123, 0, 113];

const even = evenNum.filter((number) => {
  return number % 2 === 0;
});

console.log(even);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */
const delEven = [33, 45, 8, 123, 0, 113];

var newEven = [];

for (var i = 0; i < delEven.length; i++) {
  if (delEven[i] % 2 !== 0) newEven.push(delEven[i]);
}
console.log(newEven);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */
const vowels = "EPICODE";

const noVowels = vowels.replace(/[aeiou]/gi, "");

console.log(noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */
incNum = [1, 2, 3, 4];
finalInc = incNum.map(a => a+1);
console.log(finalInc);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
