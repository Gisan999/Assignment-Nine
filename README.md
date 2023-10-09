1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined


- Answer: A: {}.
Empty objects are used when you want to create objects for various purposes without a predefined structure.
If you want to see a variable that has no value and if it is an object, it will show empty object.







2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}
sum(1, "2");

A: NaN
B: TypeError
C: "12"
D: 3

- Answer: C: 12.
String and number cannot be added normally, here one value is number and other is string so it shows as string, again if both values ​​are string it will show string, but if both values ​​are number then sum will be 3..




3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };
info.favoriteFood = "🍝";
console.log(food);

A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

- Answer: A:  ['🍕', '🍫', '🥑', '🍔'].
Push , unshift are usually used to add values ​​inside the array. Array values ​​cannot be added to or deleted from the object, so no changes are made to the array.






4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}
console.log(sayHi());

A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

- Answer:  B: Hi there, undefined.
Because it is returned dynamically by name and the value of name will come from the function parameters, since no parameters are passed to the function it is returned undefined..





5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

A: 1
B: 2
C: 3
D: 4

Answer: C: 3.
In the code you provided, you have an array containing the numbers [0, 1, 2, 3] and you are using the forEach method to iterate over each element of the array. Inside the callback function passed to forEach , this code checks whether the current value number is true (that is, not equal to 0 or false ). If number is true, it increments the count variable by 1.




