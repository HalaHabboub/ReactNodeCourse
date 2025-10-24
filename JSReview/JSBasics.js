/**
 * 🏋️ JavaScript Concepts Practice Exercises and Solutions
 * --------------------------------------------------------
 * Concepts Covered: Scoping (var, let, const), Hoisting,
 * Destructuring (Object & Array), Pass by Value vs. Reference.
 * --------------------------------------------------------
 */

// --- Exercise 1: Scoping and Redeclaration ---

/* Part A: Block Scope Confusion */

var a = 1;
let b = 2;
const c = 3;

{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("--- Ex 1A: Inside Block ---");
    console.log("a (var):", a); // SOLUTION: 10
    console.log("b (let):", b); // SOLUTION: 20
    console.log("c (const):", c); // SOLUTION: 30
}

console.log("\n--- Ex 1A: Outside Block ---");
console.log("a (var):", a); // SOLUTION: 10 (var ignores block scope, overwriting the global 'a')
console.log("b (let):", b); // SOLUTION: 2 (let is block-scoped, outer 'b' is unchanged)
console.log("c (const):", c); // SOLUTION: 3 (const is block-scoped, outer 'c' is unchanged)


/* Part B: Illegal Redeclaration */
console.log("\n--- Ex 1B: Redeclaration Check ---");

let num1 = 5;
// let num1 = 15; // ❌ ERROR: Cannot redeclare 'num1' (let)

var num2 = 5;
var num2 = 15; // ✅ OK: var allows redeclaration (value is 15)
console.log("num2 (var):", num2);

const num3 = 5;
// num3 = 15; // ❌ ERROR: Assignment to constant variable (const)


// --- Exercise 2: Hoisting ---

/* Part A: Function Hoisting */
console.log("\n--- Ex 2A: Function Hoisting ---");
console.log(getGreeting("Alice")); // SOLUTION: Hello, Alice!

function getGreeting(name) {
    return "Hello, " + name + "!";
}


/* Part B: Variable Hoisting */
console.log("\n--- Ex 2B: Variable Hoisting ---");
console.log("var x:", x); // SOLUTION: undefined (var is hoisted, but not the assignment)
var x = 50;

// console.log("let y:", y); // ❌ ERROR: ReferenceError (let/const are in the Temporal Dead Zone)
let y = 60;


// --- Exercise 3: Destructuring (Basic) ---

/* Part A: Nested Object Destructuring */
const userProfile = {
    id: 42,
    details: {
        name: "Carla",
        age: 30,
        location: {
            city: "Berlin",
            country: "Germany"
        }
    }
};

// Solution: Use nesting and renaming
let {
    details: {
        name: firstName,
        location: { city }
    }
} = userProfile;

console.log("\n--- Ex 3A: Destructuring ---");
console.log("firstName:", firstName); // SOLUTION: Carla
console.log("city:", city);       // SOLUTION: Berlin


/* Part B: Array Destructuring Swap */
let a = 10;
let B = 5;

// Solution: Use array destructuring to swap
[a, B] = [B, a];

console.log("\n--- Ex 3B: Array Swap ---");
console.log("a:", a); // SOLUTION: 5
console.log("B:", B); // SOLUTION: 10


// --- Exercise 4: Value vs. Reference ---

/* Part A: Primitives (Pass by Value) */
let count1 = 100;
let count2 = count1;

count1 += 50;
count2 *= 2;

console.log("\n--- Ex 4A: Primitives ---");
console.log("count1:", count1); // SOLUTION: 150 (Separate value)
console.log("count2:", count2); // SOLUTION: 200 (Separate value)


/* Part B: Objects (Pass by Reference) */
let config1 = {
    theme: "dark",
    fontsize: 16
};
let config2 = config1; // Both variables point to the SAME object

config1.theme = "light";
config2.fontsize = 20;

console.log("\n--- Ex 4B: Objects (Reference) ---");
console.log("config1:", config1); // SOLUTION: { theme: 'light', fontsize: 20 }
console.log("config2:", config2); // SOLUTION: { theme: 'light', fontsize: 20 }


// --- Exercise 5: Complex Destructuring and Defaults ---

const settings = {
    user: {
        id: 101,
        username: "js_student",
        is_admin: false
    },
    display: {
        theme: "dark",
        fontSize: 14
    },
    api: {
        url: "https://api.example.com/v1"
        // 'timeout' property is missing
    }
};

// Solution: Combine renaming, nesting, and default value.
let {
    user: { username: userAlias },       // Rename username to userAlias
    display: { theme },                  // Extract theme
    api: { timeout = 5000 }              // Extract timeout with a default value
} = settings;

console.log("\n--- Ex 5: Complex Destructuring ---");
console.log("userAlias:", userAlias); // SOLUTION: js_student
console.log("theme:", theme);         // SOLUTION: dark
console.log("timeout:", timeout);     // SOLUTION: 5000 (Uses default)