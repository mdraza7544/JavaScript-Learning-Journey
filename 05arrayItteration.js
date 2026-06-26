/**
 * ============================================================================
 * JAVASCRIPT ARRAY ITERATION METHODS: THE DEFINITIVE GUIDE
 * ============================================================================
 * Array iteration methods operate on every item in an array. 
 * They are built-in functions that make looping through arrays more concise,
 * readable, and declarative compared to traditional for-loops.
 *
 * Primary Methods:
 * 1. forEach()
 * 2. map()
 * 3. filter()
 * 4. reduce()
 * 5. find() & findIndex()
 * 6. some() & every()
 * 7. Method Chaining
 */

// ============================================================================
// 1. FOREACH() METHOD
// ============================================================================
/*
 * Executes a provided function once for each array element.
 * Note: It always returns undefined and does not mutate the original array
 * (though the callback function can).
 *
 * Syntax:
 * array.forEach(function(currentValue, index, arr))
 */

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Output:
// 0: Apple
// 1: Banana
// 2: Mango

// ============================================================================
// 2. MAP() METHOD
// ============================================================================
/*
 * Creates a NEW array populated with the results of calling a provided function
 * on every element in the calling array.
 *
 * Syntax:
 * let newArray = array.map(function(currentValue, index, arr))
 */

let numbers = [1, 2, 3, 4, 5];

let squaredNormal = numbers.map(function(num) {
    return num * num;
});
let squaredArrow = numbers.map((num) => {
    return num * num;
});
let squared = numbers.map(num => num * num);

console.log(squaredNormal);
console.log(squaredArrow);
console.log(squared);

// Output:
// [1, 4, 9, 16, 25]

// ============================================================================
// 3. FILTER() METHOD
// ============================================================================
/*
 * Creates a NEW array with all elements that pass the test implemented by 
 * the provided function.
 *
 * Syntax:
 * let newArray = array.filter(function(currentValue, index, arr))
 */

let ages = [12, 18, 25, 8, 30, 16];
let adultsNormal = ages.filter(function(age) {
    return age >= 18;
}); 

let adultsArrow = ages.filter((age) => {
    return age >= 18;
});

let adults = ages.filter(age => age >= 18);

console.log(adultsNormal);
console.log(adultsArrow);
console.log(adults);


// Output:
// [18, 25, 30]

// ============================================================================
// 4. REDUCE() METHOD
// ============================================================================
/*
 * Executes a "reducer" callback function on each element, passing in the
 * return value from the calculation on the preceding element. 
 * Results in a SINGLE output value.
 *
 * Syntax:
 * let result = array.reduce(function(accumulator, currentValue), initialValue)
 */

let prices = [10, 20, 30, 40];

let totalNormal = prices.reduce(function(acc, curr) {
    return acc + curr;
}, 0);
let totalArrow = prices.reduce((acc, curr) => {
    return acc + curr;
}, 0);
let total = prices.reduce((acc, curr) => acc + curr, 0);

console.log(total);
console.log(totalNormal);
console.log(totalArrow);


// Output:
// 100

// ============================================================================
// 5. FIND() & FINDINDEX() METHODS
// ============================================================================
/*
 * find() returns the VALUE of the FIRST element that passes a test.
 * findIndex() returns the INDEX of the FIRST element that passes a test.
 * If no elements match, find() returns undefined, findIndex() returns -1.
 */

let inventory = [
    { name: "Apples", quantity: 2 },
    { name: "Bananas", quantity: 0 },
    { name: "Cherries", quantity: 5 }
];

let available = inventory.find(item => item.quantity > 0);
let availableNormal = inventory.find(function(item) {
    return item.quantity > 0;
});
let availableArrow = inventory.find((item) => {
    return item.quantity > 0;
});
console.log(available.name); 
console.log(availableNormal.name); 
console.log(availableArrow.name); 

// Output: Apples

let emptyIndex = inventory.findIndex(item => item.quantity === 0);
console.log(emptyIndex);
// Output: 1

// ============================================================================
// 6. SOME() & EVERY() METHODS
// ============================================================================
/*
 * some() checks if AT LEAST ONE element passes a test (returns boolean).
 * every() checks if ALL elements pass a test (returns boolean).
 */

let scores = [45, 50, 39, 78, 65];

let hasPassed = scores.some(score => score >= 50);
console.log("Anyone passed?", hasPassed); 
// Output: Anyone passed? true

let allPassed = scores.every(score => score >= 50);
console.log("Everyone passed?", allPassed); 
// Output: Everyone passed? false

// ============================================================================
// 7. METHOD CHAINING
// ============================================================================
/*
 * Because methods like map() and filter() return new arrays, you can chain
 * them together for powerful data manipulation.
 */

let rawData = [2, 5, 8, 1, 10];

// Goal: Find numbers > 4, multiply them by 2, and sum them up
let chainedResult = rawData
    .filter(num => num > 4)        // [5, 8, 10]
    .map(num => num * 2)           // [10, 16, 20]
    .reduce((acc, num) => acc + num, 0); // 46

console.log(chainedResult);
// Output: 46

// ============================================================================
// 8. REAL-WORLD EXAMPLES
// ============================================================================

// Example 1: Extracting data from an API response
let users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
];

let activeUserNames = users
    .filter(user => user.active)
    .map(user => user.name);

console.log("Active Users:", activeUserNames);
// Output: Active Users: [ 'Alice', 'Charlie' ]

// Example 2: Calculating Cart Total
let cart = [
    { item: "Laptop", price: 1000, qty: 1 },
    { item: "Mouse", price: 50, qty: 2 }
];

let cartTotal = cart.reduce((total, current) => {
    return total + (current.price * current.qty);
}, 0);

console.log("Cart Total: $", cartTotal);
// Output: Cart Total: $ 1100

// ============================================================================
// 9. BEST PRACTICES
// ============================================================================
/*
 * ✔ Use map() when you want to transform an array and keep the same length.
 *
 * ✔ Use filter() when you want to extract a subset of an array.
 *
 * ✔ Use reduce() when you want to derive a single value from an array.
 *
 * ✔ Use forEach() only when you need to perform side effects (like logging 
 * to the console or saving to a database). Do not use it to build new arrays.
 *
 * ✔ Arrow functions make iteration methods much cleaner and more readable.
 */

// ============================================================================
// 10. COMMON MISTAKES
// ============================================================================
/*
 * ❌ Forgetting the `return` statement in map/filter/reduce
 *
 * let doubled = [1, 2, 3].map(num => {
 * num * 2; // Missing 'return' because of curly braces!
 * });
 * * Result: [undefined, undefined, undefined]
 *
 * ---------------------------------------
 *
 * ❌ Using forEach when you need a new array
 *
 * let newArr = [];
 * [1, 2, 3].forEach(num => newArr.push(num * 2)); // Works, but bad practice.
 * * Prefer: let newArr = [1, 2, 3].map(num => num * 2);
 *
 * ---------------------------------------
 *
 * ❌ Forgetting the initial value in reduce()
 * If the array is empty and no initial value is provided, reduce() throws a TypeError.
 */

// ============================================================================
// 11. INTERVIEW QUESTIONS
// ============================================================================
/*
 * Q1. What is the main difference between map() and forEach()?
 *
 * A:
 * map() returns a brand new array with the transformed elements.
 * forEach() returns undefined and is used strictly for side-effects.
 *
 * ----------------------------------------------------
 *
 * Q2. Does filter() modify the original array?
 *
 * A:
 * No. Iteration methods like map(), filter(), and reduce() are pure functions 
 * that do not mutate the original array. They return a new array (or value).
 *
 * ----------------------------------------------------
 *
 * Q3. Can you break out of a forEach() loop like you can with a regular for loop?
 *
 * A:
 * No, you cannot use 'break' or 'continue' inside a forEach() loop. If you 
 * need to stop iterating early, use a standard 'for' loop, 'for...of', 
 * or methods like some() or every().
 *
 * ----------------------------------------------------
 *
 * Q4. When would you use find() vs filter()?
 *
 * A:
 * Use find() when you expect exactly ONE matching item (it returns the object itself).
 * Use filter() when you expect MULTIPLE matching items (it returns an array of objects).
 */