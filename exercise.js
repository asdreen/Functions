/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* WRITE YOUR ANSWER HERE */
const firstArray = [1,4,7,9,13]
console.log(firstArray)

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* WRITE YOUR ANSWER HERE */
const myDatas = {
    name: "Asdren",
    surname: "Jerliu",
    email: "asdren.jerliu@gmail.com",
    age: 34
}
console.log(myDatas)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR ANSWER HERE */
myDatas.hasDrivingLicense = false;
console.log(myDatas)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* WRITE YOUR ANSWER HERE */
delete myDatas.age;
console.log(myDatas);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR ANSWER HERE */
const myDatas1 = Object.assign({}, myDatas);
myDatas1.name = "Andreas";
myDatas1.surname = "Block";
myDatas1.email = "andreas.block@yahoo.com";
console.log("My Datas is changed:", myDatas1);

console.log(myDatas.email !== myDatas1.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* WRITE YOUR ANSWER HERE */
const totalShoppingCart = 50
const shippingCost = 10

if (totalShoppingCart >= 40) {
total = totalShoppingCart
console.log('\nFree shipping is included!')
} else {
total = totalShoppingCart + shippingCost
}

total = totalShoppingCart >= 50 ? totalShoppingCart : totalShoppingCart + shippingCost

console.log('\nYour total is ' + total + '. what do you want to order?')

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* Black Friday */
const percentage = (50, 20);
console.log('\nYour discount for Black Friday is ' + percentage + '%')

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR ANSWER HERE */  
 const car = {
      brand: "VW",
      model: "Passat",
      licensePlate: "PAS L3"
 }    
console.log(car)

const car1 = Object.assign({}, car); 
car1.brand = "VW";
car1.model = "Passat";
car1.licensePlate = "M7 PAS"
console.log(car1)

const car2 = Object.assign({}); 
car2.licensePlate = "F3 PAS"
console.log(car2)
const car3 = Object.assign({}); 
car3.licensePlate = "G9 PAS"
console.log(car3)
const car4 = Object.assign({}); 
car4.licensePlate = "L5 PAS"
console.log(car4)
const car5 = Object.assign({}); 
car5.licensePlate = "PAS Z3"
console.log(car5)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* WRITE YOUR ANSWER HERE */
const arrayOfCarsForRent = [car, car1, car2, car3, car4, car5]
console.log(arrayOfCarsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */
const removedcars = arrayOfCarsForRent.pop();
console.log(arrayOfCarsForRent);
console.log(removedcars);
arrayOfCarsForRent.shift();
console.log(arrayOfCarsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log(typeof car)
console.log(typeof car.licensePlate)
console.log(car.brand)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
/* WRITE YOUR ANSWER HERE */
const carsForSale = ["Nissan", "Audi", "Jaguar"]
const totalCars = arrayOfCarsForRent.concat(carsForSale);

console.log(totalCars)


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
for (let i = 0; i < carsForSale.length; i++) {
    console.log(i);
    console.log(carsForSale[i]);
  }
