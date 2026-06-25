/**
 * ============================================================================
 * JAVASCRIPT VARIABLES: THE DEFINITIVE GUIDE
 * ============================================================================
 * Welcome to the definitive guide on JavaScript variables. Whether you are a 
 * student writing your first line of code, a developer refining your fundamental 
 * knowledge, or a candidate preparing for technical interviews, this document 
 * will serve as your ultimate resource.
 */

// ============================================================================
// 1. INTRODUCTION TO VARIABLES
// ============================================================================
/*
 * A variable is a named container used to store data in the computer's memory. 
 * Instead of using raw data directly, we assign that data to a variable.
 * 
 * Why Variables are Used:
 * - Data Storage: They hold information that might change (like a score).
 * - Readability: Naming a value makes the code easier to read.
 * - Reusability: You can use the name multiple times without repeating data.
 * - Dynamic Behavior: They allow programs to react to user input.
 */

// ============================================================================
// 2. VARIABLE NAMING RULES AND CONVENTIONS
// ============================================================================
/*
 * Naming Rules (Enforced by JavaScript):
 * 1. Valid Characters: Letters (a-z, A-Z), numbers (0-9), underscores (_), and $ signs.
 * 2. Starting Character: CANNOT start with a number.
 * 3. Case Sensitivity: myVar, MyVar, and MYVAR are different.
 * 4. Reserved Words: Cannot use keywords like 'if', 'for', 'let', 'function'.
 * 
 * Naming Conventions (Community Best Practices):
 * - camelCase: Standard variables/functions (e.g., userFirstName).
 * - PascalCase: Classes/Constructors (e.g., UserProfile).
 * - UPPER_SNAKE_CASE: Hard-coded constants (e.g., MAX_LOGIN_ATTEMPTS).
 */

// ============================================================================
// 3. var, let, AND const
// ============================================================================
/*
 * - var: Legacy declaration. Loose scoping. Generally avoided today.
 * - let: Modern declaration for variables that WILL CHANGE (re-assigned).
 * - const: Modern declaration for variables that WILL NOT CHANGE.
 * 
 * COMPARISON TABLE: var vs let vs const
 * ----------------------------------------------------------------------------
 * | Feature         | var             | let                 | const               |
 * |-----------------|-----------------|---------------------|---------------------|
 * | Introduced      | ES1 (1997)      | ES6 (2015)          | ES6 (2015)          |
 * | Re-assignment   | Allowed         | Allowed             | Not Allowed         |
 * | Re-declaration  | Allowed         | Not Allowed         | Not Allowed         |
 * | Scope           | Function/Global | Block               | Block               |
 * | Hoisting        | undefined       | Uninitialized (TDZ) | Uninitialized (TDZ) |
 * ----------------------------------------------------------------------------
 */

// ============================================================================
// 4. SCOPE
// ============================================================================
/*
 * SCOPE: Where a variable is accessible.
 * 1. Global Scope: Outside any function/block. Accessible everywhere.
 * 2. Function Scope: Inside a function. Accessible only inside that function.
 * 3. Block Scope: Inside {} (like if/for). Accessible only inside those braces.
 * 
 * Note: 'var' ignores block scope and leaks out. 'let'/'const' respect it.
 */

// ============================================================================
// 5. RE-DECLARATION & RE-ASSIGNMENT
// ============================================================================

// --- CORRECT USAGE ---

// Declare a variable using let
let age = 25; 
// Re-assign the variable to a new value
age = 26; 
console.log("Age is now:", age); // Expected Output: Age is now: 26

// --- INCORRECT USAGE (Commented out to prevent execution errors) ---

const birthYear = 1995; 
// birthYear = 1996; // ERROR! TypeError: Assignment to constant variable.
// let age = 30;     // ERROR! SyntaxError: Identifier 'age' has already been declared.

// ============================================================================
// 6. DATA TYPES AND DYNAMIC TYPING
// ============================================================================
/*
 * JavaScript is dynamically typed. Data types change automatically at runtime.
 */

// Declare a String
let dynamicData = "Hello World"; 
console.log("Type of dynamicData:", typeof dynamicData); // Output: "string"

// Re-assign to a Number
dynamicData = 100; 
console.log("Type of dynamicData:", typeof dynamicData); // Output: "number"

// Re-assign to a Boolean
dynamicData = true; 
console.log("Type of dynamicData:", typeof dynamicData); // Output: "boolean"


// ============================================================================
// 7. CATEGORIZED EXAMPLES
// ============================================================================

/* --- A. BEGINNER EXAMPLES: Math and Strings --- */

const itemPrice = 15; 
let quantity = 3; 

// Calculate total
let totalCost = itemPrice * quantity; 
console.log("Total Cost:", totalCost); // Output: 45

const firstName = "John"; 
const lastName = "Doe"; 

// Template literal string concatenation
let fullName = `${firstName} ${lastName}`; 
console.log("Full Name:", fullName); // Output: "John Doe"

/* --- B. INTERMEDIATE EXAMPLES: Block Scoping & Shadowing --- */

let accessLevel = "Guest"; 

if (true) {
    // Block-scoped 'let' shadows the outer variable
    let accessLevel = "Admin"; 
    console.log("Inside block:", accessLevel); // Output: "Admin"
    
    // 'var' ignores block scope
    var leakedVar = "I escaped!"; 
}

// Outer variable remains unchanged
console.log("Outside block:", accessLevel); // Output: "Guest"
// var leaked out
console.log("Leaked variable:", leakedVar); // Output: "I escaped!"

/* --- C. ADVANCED EXAMPLES: const Mutation vs Re-assignment --- */

const userProfile = {
    name: "Sarah",
    age: 28
};

// MUTATION (ALLOWED): Modifying properties inside a const object is fine
userProfile.age = 29; 
userProfile.role = "Manager"; 
console.log("Mutated const object age:", userProfile.age); // Output: 29

// RE-ASSIGNMENT (NOT ALLOWED): 
// userProfile = { name: "Mike" }; // ERROR!

/* --- D. REAL-WORLD EXAMPLES: Toggling State --- */

// State variable that will change
let isDarkMode = false; 

function toggleTheme() {
    // Invert boolean state
    isDarkMode = !isDarkMode; 
    
    if (isDarkMode) {
        console.log("UI Update: Dark mode activated");
    } else {
        console.log("UI Update: Light mode activated");
    }
}

// Simulate user clicks
toggleTheme(); // Output: Dark mode activated
toggleTheme(); // Output: Light mode activated


// ============================================================================
// 8. BEST PRACTICES AND COMMON MISTAKES
// ============================================================================
/*
 * BEST PRACTICES:
 * 1. Default to 'const'. Only use 'let' if you know the value must change.
 * 2. Never use 'var' in modern ES6+ codebases.
 * 3. Use descriptive, camelCase names.
 * 4. Declare variables at the top of their respective scopes.
 * 
 * COMMON MISTAKES:
 * 1. Polluting the global space (too many global variables).
 * 2. Implicit Globals: Forgetting 'let'/'const' creates a global variable in 
 *    loose mode. Always use "use strict";
 * 3. Confusing 'undefined' (system default for uninitialized) and 'null' 
 *    (developer-assigned intentional empty value).
 */


// ============================================================================
// 9. INTERVIEW QUESTIONS AND ANSWERS
// ============================================================================
/*
 * Q1: Difference between undefined and not defined?
 * A1: 'undefined' means declared but has no value yet. 'not defined' 
 *     (ReferenceError) means the variable was never declared in scope.
 * 
 * Q2: What is the Temporal Dead Zone (TDZ)?
 * A2: The period between the start of a block and the execution of a let/const 
 *     declaration. Accessing the variable during this time throws an error.
 * 
 * Q3: Can you mutate an array declared with const?
 * A3: Yes. 'const' prevents re-assigning the identifier, but methods like 
 *     .push() or modifying indices are allowed.
 * 
 * Q4: Why use 'let' instead of 'var' in for-loops?
 * A4: 'var' leaks out of the loop and causes closure bugs in async code. 'let' 
 *     creates a fresh block-scoped binding for every iteration.
 */

// ============================================================================
// 10. SUMMARY
// ============================================================================
/*
 * - Use meaningful names (camelCase).
 * - Abandon 'var'.
 * - Use 'const' by default, 'let' when mutations are needed.
 * - Remember that 'const' objects/arrays can still be mutated internally.
 * - Beware of hoisting and the TDZ.
 */