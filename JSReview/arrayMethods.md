# 📝 Array Iteration Methods: forEach, map, and filter

These three methods are fundamental for processing arrays in JavaScript cleanly and efficiently. They all accept a callback function that operates on each element.

---


## 📑 Table of Contents
1. [Array Methods Summary](#array-methods-summary)
2. [1. `Array.prototype.forEach()`](#1-arrayprototypeforeach)
3. [2. `Array.prototype.map()`](#2-arrayprototypemap)
4. [3. `Array.prototype.filter()`](#3-arrayprototypefilter)
5. [4. `Array.prototype.reduce()`](#4-arrayprototypereduce)
6. [5. `Array.prototype.slice()`](#5-arrayprototypeslice)

---

## 🧮 Array Methods Summary

| Method | Purpose | Returns | Changes Original? | Common Use |
| :--- | :--- | :--- | :--- | :--- |
| **forEach()** | Runs a function for each element | `undefined` | ❌ | Logging or external updates |
| **map()** | Transforms elements into new values | New array (same length) | ❌ | Converting data |
| **filter()** | Keeps elements that meet a condition | New array (shorter) | ❌ | Selecting items |
| **reduce()** | Combines all elements into one value | Single value | ❌ | Totals, summaries, transformations |
| **slice()** | Extracts a section of an array | New array | ❌ | Copying or subarrays |

---

## 1. `Array.prototype.forEach()`

Used for iteration and side effects.

| Feature | Description |
| :--- | :--- |
| **Purpose** | To execute a function for every element. Used for tasks like logging, printing to the DOM, or external updates. |
| **Return Value** | Always **`undefined`**. It does not create a new array. |
| **Callback** | Accepts `(item, index, array)` as arguments. |

**Example (Logging):**

```javascript
let people = ['Razan', 'Sherry', 'Abdulrahman'];

people.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});
````

-----

## 2\. `Array.prototype.map()`

Used for transformation.

| Feature | Description |
| :--- | :--- |
| **Purpose** | To **transform** every element into a new value. |
| **Return Value** | A **new array** of the **exact same length** as the original. |
| **Key Trap** | If the callback doesn't explicitly return a value, or only returns conditionally, `undefined` will be added to the new array for the non-returned items. |

**Example (Squaring Numbers):**

```javascript
let numbers = [2, 3, 4, 5];

let squareNumbers = numbers.map((item) => item * item);

// squareNumbers will be [4, 9, 16, 25]
```

-----

## 3\. `Array.prototype.filter()`

Used for selection.

| Feature | Description | |
| :--- | :--- | :--- |
| **Purpose** | To **select** a subset of elements that satisfy a specific condition. | |
| **Return Value** | A **new array** containing only the passing elements. The length may be shorter. | |
| **Crucial Rule** | The callback function **MUST** return a boolean (`true` or `false`). `true` keeps the item; `false` discards it. | |

**Example (Filtering Even Numbers):**

```javascript
let numbers4 = [0, 1, 2, 6, 7, 8];

let evenNums = numbers4.filter(num => {
    return num % 2 == 0; // Returns true (keep) or false (discard)
});

// evenNums will be [0, 2, 6, 8]
```

## 4. `Array.prototype.reduce()`

Used for **reducing** an array to a single value.

| Feature           | Description                                                                  |
| :---------------- | :--------------------------------------------------------------------------- |
| **Purpose**       | To combine all elements into one cumulative result.                          |
| **Return Value**  | A **single value** (number, string, object, etc.).                           |
| **Callback**      | `(accumulator, currentValue)` where `accumulator` stores the ongoing result. |
| **Initial Value** | Optional but important — defines the starting accumulator.                   |

**Example (Sum of Numbers):**

```javascript
let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // 10
```

**Example (Finding the Longest Word):**

```javascript
let words = ["hi", "hello", "sunshine", "ok"];

let longest = words.reduce((acc, word) =>
    word.length > acc.length ? word : acc
);

console.log(longest); // "sunshine"
```

---

## 5. `Array.prototype.slice()`

Used for **copying or extracting parts** of an array.

| Feature          | Description                                           |
| :--------------- | :---------------------------------------------------- |
| **Purpose**      | To return a shallow copy of a section of an array.    |
| **Return Value** | A **new array** containing the selected elements.     |
| **Parameters**   | `slice(start, end)` — start inclusive, end exclusive. |

**Example (Extracting a Subarray):**

```javascript
let fruits = ["apple", "banana", "cherry", "date", "kiwi"];

let tropical = fruits.slice(1, 4);
console.log(tropical); // ["banana", "cherry", "date"]
```

**Example (Using Negative Indexes):**

```javascript
let lastTwo = fruits.slice(-2);
console.log(lastTwo); // ["date", "kiwi"]
```

**Example (Copying the Entire Array):**

```javascript
let copy = fruits.slice();
console.log(copy); // ["apple", "banana", "cherry", "date", "kiwi"]
```
