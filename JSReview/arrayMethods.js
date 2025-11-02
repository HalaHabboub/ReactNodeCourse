// /////////////////////////////////////////
// Array Iteration Methods: forEach, map, filter
// /////////////////////////////////////////

// Exercise 1 Data
const students = ['Alex', 'Baha', 'Chad', 'Diana'];
// ❌ Your task: Write a forEach loop here ❌
// Expected Output:
// Welcome, Alex!
// Welcome, Baha!
// ...


// Solution 1: forEach (Side Effect)
students.forEach((student) => {
    // Use backticks (`) and ${} for template literals
    console.log(`Welcome, ${student}!`);
});
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Exercise 2 Data
const prices = [100, 50, 75, 200];
// ❌ Your task: Create the discountedPrices array using map ❌
// Expected Output: [90, 45, 67.5, 180]


// Solution 2: map (Transformation)
// To reduce by 10%, multiply by 0.9 
let discountedPrices = prices.map((price) => price * 0.9);

console.log("\n--- Map Results ---");
console.log("Original Prices:", prices);
console.log("Discounted Prices:", discountedPrices);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Exercise 3 Data
const transactions = [
    { id: 1, amount: 50, type: 'withdrawal' },
    { id: 2, amount: 120, type: 'deposit' },
    { id: 3, amount: 80, type: 'deposit' },
    { id: 4, amount: 25, type: 'withdrawal' }
];
// ❌ Your task: Create the depositTransactions array using filter ❌
// Expected Output: Array containing objects with id 2 and 3.


// Solution 3: filter (Selection)
let depositTransactions = transactions.filter((transaction) => {
    // Returns true or false based on the type property
    return transaction.type === "deposit";
});

console.log("\n--- Filter Results ---");
console.log("Deposit Transactions:", depositTransactions);