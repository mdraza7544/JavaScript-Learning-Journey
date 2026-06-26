/**
 * ============================================================================
 * JAVASCRIPT CONDITIONAL STATEMENTS: THE DEFINITIVE GUIDE
 * ============================================================================
 * Conditional statements allow JavaScript to make decisions based on
 * different conditions.
 *
 * Types:
 * 1. if Statement
 * 2. if...else Statement
 * 3. else if Ladder
 * 4. Nested if
 * 5. switch Statement
 * 6. Ternary Operator (? :)
 */

// ============================================================================
// 1. IF STATEMENT
// ============================================================================
/*
 * Executes the block only if the condition is true.
 *
 * Syntax:
 * if (condition) {
 *     // code
 * }
 */

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// ============================================================================
// 2. IF...ELSE STATEMENT
// ============================================================================
/*
 * Executes one block if the condition is true,
 * otherwise executes another block.
 *
 * Syntax:
 * if (condition) {
 *     // code
 * } else {
 *     // code
 * }
 */

let marks = 35;

if (marks >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ============================================================================
// 3. ELSE IF LADDER
// ============================================================================
/*
 * Used when there are multiple conditions.
 */

let score = 85;

if (score >= 90) {
    console.log("Grade A+");
} else if (score >= 80) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// ============================================================================
// 4. NESTED IF
// ============================================================================
/*
 * An if statement inside another if statement.
 */

let isStudent = true;
let attendance = 80;

if (isStudent) {
    if (attendance >= 75) {
        console.log("Eligible for Exam");
    } else {
        console.log("Attendance is low");
    }
} else {
    console.log("Not a student");
}

// ============================================================================
// 5. SWITCH STATEMENT
// ============================================================================
/*
 * Used when checking multiple values of one variable.
 *
 * Syntax:
 * switch(variable){
 *    case value:
 *       code;
 *       break;
 *    default:
 *       code;
 * }
 */

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// ============================================================================
// 6. TERNARY OPERATOR
// ============================================================================
/*
 * Shorthand for if...else
 *
 * Syntax:
 * condition ? trueValue : falseValue;
 */

let number = 10;

let result = (number % 2 === 0) ? "Even Number" : "Odd Number";

console.log(result);

// ============================================================================
// 7. REAL-WORLD EXAMPLES
// ============================================================================

// Example 1: Login Check
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// Example 2: Positive, Negative or Zero

let num = -5;

if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

// Example 3: Largest Number

let a = 25;
let b = 18;

if (a > b) {
    console.log(a + " is greater");
} else {
    console.log(b + " is greater");
}

// ============================================================================
// 8. BEST PRACTICES
// ============================================================================
/*
 * ✔ Always use === instead of ==
 * ✔ Use switch when checking one variable against many values.
 * ✔ Use Ternary only for simple conditions.
 * ✔ Keep conditions readable.
 * ✔ Use meaningful variable names.
 */

// ============================================================================
// 9. COMMON MISTAKES
// ============================================================================
/*
 * ❌ Using = instead of ==
 *
 * Wrong:
 * if(age = 18)
 *
 * Correct:
 * if(age === 18)
 *
 * ❌ Forgetting break in switch.
 *
 * ❌ Writing deeply nested if statements.
 */

// ============================================================================
// 10. INTERVIEW QUESTIONS
// ============================================================================
/*
 * Q1. Difference between if and switch?
 * A:
 * if -> Best for ranges and complex conditions.
 * switch -> Best for checking one variable against many fixed values.
 *
 * Q2. Difference between == and ===?
 * A:
 * == compares value only.
 * === compares value and datatype.
 *
 * Q3. When should we use a Ternary Operator?
 * A:
 * For simple if...else statements in one line.
 *
 * Q4. Why is break used in switch?
 * A:
 * It stops execution after the matching case.
 *
 * Q5. What is Nested if?
 * A:
 * An if statement inside another if statement.
 */