// /////////////////////////////////////////
// 1. Spread Operator (Unpacking)
// /////////////////////////////////////////

// Copying Arrays and Objects
const arr11 = [1, 2, 3];
const arr22 = [...arr11]; // Creates a new shallow copy
arr22.push(6);
console.log("\n--- Spread Copy ---");
console.log("Original arr11 (safe):", arr11);
console.log("Copy arr22 (mutated):", arr22);


// Merging Objects (Last value wins on duplicate keys)
const user = { username: "John", age: 30 };
const details = { username: "Razan", country: "USA" };
const empDetails = { ...user, ...details } // 'username: "Razan"' overwrites 'username: "John"'
console.log("Merged Object (Last key wins):", empDetails);


// Exercise 1 Solution: Merging and Transformation
const arrayA = [10, 20];
const arrayB = [30, 40];
const finalArray = ['Adam', ...arrayA, ...arrayB, 50];
console.log("Ex 1 Final Array:", finalArray);


// Exercise 3 Solution: Object Overwriting
const baseUser = { id: 1, name: "Maria", email: "m@test.com" };
const config = { isActive: true, role: "Guest" };

const userProfile = {
    ...baseUser,
    ...config,
    role: "Admin" // Overwrites the 'role' property from 'config'
};
console.log("Ex 3 User Profile (Role Admin):", userProfile);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// /////////////////////////////////////////
// 2. Rest Operator (Collecting)
// /////////////////////////////////////////

// Rest Parameters Example
function sumAll(...args) {
    console.log(`\nArguments collected into an array: [${args}]`);
    return args.reduce((total, num) => total + num, 0);
}
console.log("Sum 1, 2, 3, 4:", sumAll(1, 2, 3, 4));

// Exercise 2 Solution: Rest Parameters
function logDetails(name, ...details) {
    // 'details' is the Rest array: ["Student", "Biology", "Level 3"]
    return details.join(', '); // Join the array elements into a string
}

const detailsString = logDetails("Sara", "Student", "Biology", "Level 3");
console.log("Ex 2 Details String:", detailsString);