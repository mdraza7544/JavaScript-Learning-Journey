/**
 * ============================================================================
 * JAVASCRIPT OPERATORS: THE DEFINITIVE GUIDE
 * ============================================================================
 * Welcome to the comprehensive guide on JavaScript Operators. 
 * Operators are special symbols or keywords used to perform operations on 
 * variables and values (operands). This guide covers math, comparisons, 
 * logic, and modern ES6+ operators.
 */

// ============================================================================
// 1. ARITHMETIC & STRING OPERATORS
// ============================================================================
/*
 * Used to perform standard mathematical operations and string concatenation.
 * * +  : Addition (or String Concatenation)
 * -  : Subtraction
 * * : Multiplication
 * /  : Division
 * %  : Modulus (Remainder of division)
 * ** : Exponentiation (Power)
 * ++ : Increment (Adds 1)
 * -- : Decrement (Subtracts 1)
 */

// ============================================================================
// 2. ASSIGNMENT OPERATORS
// ============================================================================
/*
 * Used to assign or update values in a variable.
 * * =   : Assign (e.g., x = 5)
 * +=  : Add and assign (e.g., x += 5 is exactly the same as x = x + 5)
 * -=  : Subtract and assign
 * *=  : Multiply and assign
 * /=  : Divide and assign
 */

// ============================================================================
// 3. COMPARISON OPERATORS (EQUALITY)
// ============================================================================
/*
 * Used to compare two values. They ALWAYS return a boolean (true or false).
 * * ==  : Loose Equality. Compares VALUE ONLY (performs type coercion).
 * === : Strict Equality. Compares VALUE AND TYPE (Best Practice).
 * !=  : Loose Inequality.
 * !== : Strict Inequality.
 * >   : Greater than.
 * <   : Less than.
 * >=  : Greater than or equal to.
 * <=  : Less than or equal to.
 */

// ============================================================================
// 4. LOGICAL & MODERN OPERATORS
// ============================================================================
/*
 * Used to determine the logic between variables or values.
 * * &&  : Logical AND (Returns true if BOTH sides are true)
 * ||  : Logical OR  (Returns true if AT LEAST ONE side is true)
 * !   : Logical NOT (Inverts a boolean value)
 * * --- MODERN ES6+ OPERATORS ---
 * ??  : Nullish Coalescing (Returns right side ONLY if left side is null/undefined)
 * ?.  : Optional Chaining (Safely accesses nested object properties)
 * ? : : Ternary Operator (Shorthand for if/else statements)
 */

// ============================================================================
// 5. CATEGORIZED EXAMPLES
// ============================================================================

/* --- A. ARITHMETIC & STRING EXAMPLES --- */

let score = 10;
score++; // Increment to 11
console.log("Score:", score); // Output: 11

let remainder = 10 % 3; // 10 divided by 3 leaves a remainder of 1
console.log("Modulus Remainder:", remainder); // Output: 1

let greeting = "Hello" + " " + "World"; // String Concatenation
console.log("Greeting:", greeting); // Output: "Hello World"


/* --- B. COMPARISON: THE == VS === TRAP --- */

const num = 5;
const strNum = "5";

// Loose equality converts the string to a number before comparing
console.log("Loose (==):", num == strNum);   // Output: true

// Strict equality checks type too. Number !== String.
console.log("Strict (===):", num === strNum); // Output: false


/* --- C. LOGICAL AND TERNARY EXAMPLES --- */

const isAdult = true;
const hasTicket = false;

// AND requires both to be true
console.log("Can enter?", isAdult && hasTicket); // Output: false

// OR requires only one to be true
console.log("Discount applied?", isAdult || hasTicket); // Output: true

// Ternary Operator: condition ? expressionIfTrue : expressionIfFalse
let entryMessage = (isAdult && hasTicket) ? "Welcome in!" : "Access Denied.";
console.log("Status:", entryMessage); // Output: "Access Denied."


/* --- D. ADVANCED: NULLISH COALESCING (??) VS OR (||) --- */

let userVolume = 0; // The user specifically set their volume to 0

// Logical || treats 0 as "falsy" and overrides it with 100. (BUG!)
let actualVolumeBad = userVolume || 100; 
console.log("Using || :", actualVolumeBad); // Output: 100

// Nullish ?? ONLY overrides if userVolume is null or undefined. (CORRECT!)
let actualVolumeGood = userVolume ?? 100;
console.log("Using ?? :", actualVolumeGood); // Output: 0





/**
 * ============================================================================
 * ALL OPERATORS WITH SIMPLE VARIABLE NAMES
 * ============================================================================
 * A practical demonstration using simple variable names to show how variables 
 * and different operators work together in a real script.
 */

// ============================================================================
// 1. SETUP: SIMPLE VARIABLES
// ============================================================================
let x = 10;
let y = 3;
const user = "Alex";

// ============================================================================
// 2. ARITHMETIC OPERATORS
// ============================================================================
let sum = x + y;       // Addition: 10 + 3 = 13
let diff = x - y;      // Subtraction: 10 - 3 = 7
let prod = x * y;      // Multiplication: 10 * 3 = 30
let div = x / y;       // Division: 10 / 3 = 3.333...
let rem = x % y;       // Modulus (Remainder): 10 % 3 = 1
let power = x ** y;    // Exponentiation: 10^3 = 1000

x++;                   // Increment: x becomes 11
y--;                   // Decrement: y becomes 2

// ============================================================================
// 3. ASSIGNMENT OPERATORS
// ============================================================================
let a = 5;             // Basic assignment

a += 2;                // Add & assign: a = a + 2 (Result: 7)
a -= 1;                // Subtract & assign: a = a - 1 (Result: 6)
a *= 2;                // Multiply & assign: a = a * 2 (Result: 12)
a /= 3;                // Divide & assign: a = a / 3 (Result: 4)

// ============================================================================
// 4. COMPARISON OPERATORS (Returns true or false)
// ============================================================================
// Note: x is currently 11, y is currently 2

let isLooseEq = (x == "11");    // Loose equality: true (Value matches)
let isStrictEq = (x === "11");  // Strict equality: false (Number vs String)
let isNotEq = (x != 5);         // Loose inequality: true
let isStrictNot = (x !== 11);   // Strict inequality: false (x IS exactly 11)

let isGreater = (x > y);        // Greater than: true (11 > 2)
let isLess = (x < y);           // Less than: false (11 is not < 2)
let isLessOrEq = (y <= 5);      // Less than or equal: true (2 <= 5)

// ============================================================================
// 5. LOGICAL & MODERN OPERATORS
// ============================================================================
let isAdult = true;
let hasID = false;

// Logical AND (&&) - Both must be true
let canEnter = isAdult && hasID;     // Result: false

// Logical OR (||) - At least one must be true
let needsCheck = isAdult || hasID;   // Result: true

// Logical NOT (!) - Inverts the boolean
let isKid = !isAdult;                // Result: false

// Nullish Coalescing (??) - Fallback for null/undefined
let customScore = null;
let finalScore = customScore ?? 100; // Result: 100 (Because customScore is null)

// Ternary Operator (? :) - Shorthand if/else
// Syntax: condition ? resultIfTrue : resultIfFalse
let status = (x > 10) ? "High" : "Low"; // Result: "High" (Because x is 11)






// ============================================================================
// 6. BEST PRACTICES AND COMMON MISTAKES
// ============================================================================
/*
 * BEST PRACTICES:
 * 1. ALWAYS use strict equality (===) and inequality (!==).
 * 2. Use parentheses to group complex mathematical or logical operations 
 * to make the order of operations explicit (e.g., (a + b) * c).
 * 3. Prefer Ternary operators for simple one-line if/else assignments.
 * * COMMON MISTAKES:
 * 1. Confusing assignment (=) with equality (== or ===).
 * 2. Relying on implicit type coercion (letting JS guess what you mean).
 * 3. Using Logical OR (||) for default values when the valid value might 
 * be 0 or false. Use Nullish Coalescing (??) instead.
 */

// ============================================================================
// 7. INTERVIEW QUESTIONS AND ANSWERS
// ============================================================================
/*
 * Q1: What is type coercion in JavaScript?
 * A1: It is the automatic or implicit conversion of values from one data type 
 * to another (such as strings to numbers). It often happens when using 
 * loose equality (==) or the '+' operator with mixed types.
 * * Q2: Explain the difference between && and ||.
 * A2: && (AND) evaluates to true only if all operands are true. It stops and 
 * returns the first "falsy" value it finds. || (OR) evaluates to true if 
 * any operand is true. It stops and returns the first "truthy" value.
 * * Q3: What will `console.log("5" + 3)` and `console.log("5" - 3)` output?
 * A3: "5" + 3 outputs "53" (the + triggers string concatenation). 
 * "5" - 3 outputs 2 (the - triggers numeric math, forcing the string to a number).
 * * Q4: What is the Ternary operator?
 * A4: It is the only JavaScript operator that takes three operands. It functions 
 * as a shortcut for an if/else statement: `condition ? ifTrue : ifFalse`.
 */