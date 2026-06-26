/**
 * ============================================================================
 * JAVASCRIPT LOOPS: THE DEFINITIVE GUIDE
 * ============================================================================
 * Loops are used to execute a block of code repeatedly until a condition
 * becomes false.
 *
 * Types of Loops:
 * 1. for Loop
 * 2. while Loop
 * 3. do...while Loop
 * 4. for...of Loop
 * 5. for...in Loop
 * 6. break Statement
 * 7. continue Statement
 */

// ============================================================================
// 1. FOR LOOP
// ============================================================================
/*
 * The for loop is the most commonly used loop.
 *
 * Syntax:
 *
 * for (initialization; condition; increment/decrement) {
 *     // code
 * }
 */

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

// ============================================================================
// 2. FOR LOOP EXAMPLES
// ============================================================================

// Example 1: Print 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Example 2: Print Even Numbers

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Example 3: Print Odd Numbers

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// Example 4: Reverse Counting

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Example 5: Multiplication Table

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// ============================================================================
// 3. WHILE LOOP
// ============================================================================
/*
 * Executes while the condition is true.
 *
 * Syntax:
 *
 * while(condition){
 *      // code
 * }
 */

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// ============================================================================
// 4. DO...WHILE LOOP
// ============================================================================
/*
 * Executes the block at least once before checking the condition.
 *
 * Syntax:
 *
 * do{
 *      // code
 * }while(condition);
 */

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// ============================================================================
// 5. FOR...OF LOOP
// ============================================================================
/*
 * Used to iterate over Arrays and Strings.
 */

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Output:
// Apple
// Banana
// Mango

// Example with String

let name = "JavaScript";

for (let letter of name) {
    console.log(letter);
}

// ============================================================================
// 6. FOR...IN LOOP
// ============================================================================
/*
 * Used to iterate over Object properties.
 */

let student = {
    name: "Alex",
    age: 22,
    city: "Delhi"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}

// Output:
// name : Alex
// age : 22
// city : Delhi

// ============================================================================
// 7. BREAK STATEMENT
// ============================================================================
/*
 * Stops the loop immediately.
 */

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5

// ============================================================================
// 8. CONTINUE STATEMENT
// ============================================================================
/*
 * Skips the current iteration.
 */

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5

// ============================================================================
// 9. NESTED LOOP
// ============================================================================
/*
 * A loop inside another loop.
 */

for (let row = 1; row <= 3; row++) {

    for (let col = 1; col <= 3; col++) {
        console.log(`Row ${row} Column ${col}`);
    }

}

// ============================================================================
// 10. REAL-WORLD EXAMPLES
// ============================================================================

// Example 1: Calculate Sum

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum =", sum);

// Example 2: Find Largest Number

let numbers = [12, 45, 9, 76, 22];

let largest = numbers[0];

for (let num of numbers) {

    if (num > largest) {
        largest = num;
    }

}

console.log("Largest =", largest);

// Example 3: Count Characters

let word = "JavaScript";

let count = 0;

for (let letter of word) {
    count++;
}

console.log("Characters =", count);

// ============================================================================
// 11. BEST PRACTICES
// ============================================================================
/*
 * ✔ Use for loop when number of iterations is known.
 *
 * ✔ Use while loop when iterations are unknown.
 *
 * ✔ Use do...while when the code must execute at least once.
 *
 * ✔ Use for...of for Arrays and Strings.
 *
 * ✔ Use for...in for Objects.
 *
 * ✔ Avoid unnecessary nested loops because they reduce performance.
 */

// ============================================================================
// 12. COMMON MISTAKES
// ============================================================================
/*
 * ❌ Forgetting increment/decrement
 *
 * let i = 1;
 *
 * while(i <= 5){
 *      console.log(i);
 * }
 *
 * Result:
 * Infinite Loop
 *
 * ---------------------------------------
 *
 * ❌ Using for...in with Arrays
 *
 * Prefer:
 *
 * for...of
 *
 * ---------------------------------------
 *
 * ❌ Writing wrong loop condition
 *
 * Example:
 *
 * for(let i = 1; i >= 10; i++)
 *
 * The loop never executes.
 */

// ============================================================================
// 13. INTERVIEW QUESTIONS
// ============================================================================
/*
 * Q1. Difference between for and while?
 *
 * A:
 * for -> Used when number of iterations is known.
 * while -> Used when number of iterations is unknown.
 *
 * ----------------------------------------------------
 *
 * Q2. Difference between while and do...while?
 *
 * A:
 * while checks the condition first.
 * do...while executes once before checking.
 *
 * ----------------------------------------------------
 *
 * Q3. Difference between for...of and for...in?
 *
 * A:
 * for...of -> Iterates over values (Arrays, Strings).
 * for...in -> Iterates over object keys.
 *
 * ----------------------------------------------------
 *
 * Q4. What does break do?
 *
 * A:
 * Terminates the loop immediately.
 *
 * ----------------------------------------------------
 *
 * Q5. What does continue do?
 *
 * A:
 * Skips the current iteration and moves to the next.
 *
 * ----------------------------------------------------
 *
 * Q6. What is an Infinite Loop?
 *
 * A:
 * A loop that never ends because its condition always remains true.
 *
 * Example:
 *
 * while(true){
 *      console.log("Infinite");
 * }
 */