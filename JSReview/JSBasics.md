# 📚 Basic JavaScript Concepts Notes

This document summarizes fundamental JavaScript concepts based on the code in `02-JS/demo-01.js`.

---

## 🧭 Table of Contents

1.  [Variable Scoping (`var`, `let`, `const`)](#1-variable-scoping-var-let-const)
    * [`var` (Global/Function Scope)](#var-globalfunction-scope)
    * [`let` (Block Scope)](#let-block-scope)
    * [`const` (Block Scope & Immutability)](#const-block-scope--immutability)
2.  [JavaScript Hoisting](#2-javascript-hoisting)
3.  [Data Types and `typeof`](#3-data-types-and-typeof)
4.  [Object Destructuring](#4-object-destructuring)
5.  [Destructuring Syntax Deep Dive](#5-destructuring-syntax-deep-dive)
6.  [Pass By Value vs. Pass By Reference](#6-pass-by-value-vs-pass-by-reference)
    * [Passing by Value (Primitives)](#passing-by-value-primitives)
    * [Passing by Reference (Objects/Arrays)](#passing-by-reference-objectsarrays)

---

## 1. Variable Scoping (`var`, `let`, `const`)

### `var` (Global/Function Scope)

* `var` is **function-scoped** or **globally-scoped**. It **ignores** block scopes (code wrapped in `{}`).
* This can lead to variables being unexpectedly available outside of the block they were declared in, and it allows for redeclaration.

| Code Example | Output/Explanation |
| :--- | :--- |
| ```javascript { var x1 = 9; } console.log(x1); ``` | **Output: `9`** (The variable escapes the block scope.) |
| ```javascript var x1 = 88; console.log(x1); ``` | **Output: `88`** (The variable is re-declared without error.) |

### `let` (Block Scope)

* `let` is **block-scoped** (scoped to the nearest pair of `{}`). This is the preferred way to declare mutable variables.
* It **cannot** be redeclared in the same scope.

| Code Example | Output/Explanation |
| :--- | :--- |
| ```javascript { let x2 = 10; console.log(x2); } let x2 = 90; console.log(x2); ``` | **Outputs: `10`** (from inside the block), then **`90`** (The second `x2` is a different variable because it's in a different scope). |

### `const` (Block Scope & Immutability)

* `const` is also **block-scoped**.
* It stands for "constant" and must be initialized upon declaration. Its value **cannot be reassigned** after declaration.
* **Important:** For objects and arrays, `const` prevents reassignment of the variable itself, but **does not** prevent modification of the object's contents (e.g., pushing to an array).

| Code Example | Output/Explanation |
| :--- | :--- |
| ```javascript const x3 = 11; // x3 = 9; (This line causes an error) ``` | The variable `x3` holds the value `11` throughout. Attempting to reassign it throws a `TypeError`. |

---

## 2. JavaScript Hoisting

**Hoisting** is JavaScript's behavior of moving declarations (but not initializations) to the top of the current scope during compilation.

* **`function` declarations** are **fully hoisted** (both the name and the definition).
* **`var` declarations** are hoisted, but only the declaration is moved up, not the assignment.
* **`let` and `const`** are also hoisted, but attempting to access them before the actual declaration line results in a `ReferenceError` (this is known as the "**Temporal Dead Zone**").

| Code Example | Output/Explanation |
| :--- | :--- |
| ```javascript console.log(summation(3, 9)); function summation(x, y) { return x + y; } ``` | **Output: `12`** <br> The `summation` function can be called before its definition in the code because the entire function is hoisted. |
| ```javascript console.log(x); // Line 1 var x = 50; ``` | **Output: `undefined`** <br> **`var` is hoisted, but only the declaration (`var x;`), not the assignment (`= 50`). At Line 1, `x` exists but has no value yet.** |

---

## 3. Data Types and `typeof`

The **`typeof`** operator returns a string indicating the type of the unevaluated operand.

| Code Example | Output/Explanation |
| :--- | :--- |
| ```javascript console.log(typeof x1); // where x1 is a number ``` | **Output: `"number"`** |

---

## 4. Object Destructuring

**Destructuring assignment** is a special syntax that allows you to "unpack" values from arrays, or properties from objects, into distinct variables. It makes accessing object properties much cleaner.

| Standard Access | Destructuring |
| :--- | :--- |
| ```javascript let username = obj1.name; let age2 = obj1.age; ``` | ```javascript let { name, age } = obj1; ``` |

You can also rename variables during destructuring using the syntax `property: newName`:

| Code Example | Output/Explanation |
| :--- | :--- |
| ```javascript const obj2 = { name: "Alice", age: 25 }; let { name: username, age: age2 } = obj2; console.log(username); console.log(age2); ``` | **Outputs: `Alice`** and **`25`** |

---

## 5. Destructuring Syntax Deep Dive

Destructuring follows a pattern that mirrors the structure of the data source (object or array).

### 1. Object Destructuring (`{}`)

Used for **objects**. The variable name must match the property key.

| Syntax Feature | Example | Result |
| :--- | :--- | :--- |
| **Basic Match** | `let { name } = person;` | `name` variable is created with the value of `person.name`. |
| **Renaming** | `let { name: first } = person;` | `first` variable is created with the value of `person.name`. |
| **Nesting** | `let { details: { age } } = profile;` | Used to extract a property from a nested object. |
| **Default Values** | `let { email = 'N/A' } = user;` | If `user.email` is undefined, `email` defaults to `'N/A'`. |

### 2. Array Destructuring (`[]`)

Used for **arrays**. Variables are matched by **position**.

| Syntax Feature | Example | Result |
| :--- | :--- | :--- |
| **Basic Position** | `let [a, b] = [1, 2];` | `a` gets `1`, `b` gets `2`. |
| **Skipping** | `let [a, , c] = [1, 2, 3];` | `a` gets `1`, `c` gets `3` (the value `2` is skipped). |
| **Rest/Spread** | `let [first, ...rest] = [1, 2, 3, 4];` | `first` gets `1`, `rest` gets `[2, 3, 4]` (an array). |

---

## 6. Pass By Value vs. Pass By Reference

### Passing by Value (Primitives)

**Primitives** (Number, String, Boolean, Null, Undefined, Symbol, BigInt) are passed **by value**.

* When you assign one primitive variable to another (`n2 = n1`), you copy the *actual value*. Changing the new variable **does not** affect the original.

| Code Example | Output/Explanation |
| :--- | :--- |
| ```javascript let n1 = 89; let n2 = n1; n2 = 99; console.log(n1); console.log(n2); ``` | **Outputs: `89`** and **`99`** <br> `n1` remains `89` because `n2` was a separate copy of the value. |

### Passing by Reference (Objects/Arrays)

**Objects** and **Arrays** are passed **by reference** (or more accurately, by "**sharing**").

* When you assign one object variable to another (`arr2 = arr1`), you copy the **memory address (reference)**, not the object itself.
* Both variables now point to the **same underlying object** in memory. Changing the object via one variable affects the object seen by the other.

| Code Example | Output/Explanation |
| :--- | :--- |
| ```javascript let arr1 = [1, 2, 3]; let arr2 = arr1; arr2.push(4); console.log(arr1); console.log(arr2); ``` | **Outputs: `[1, 2, 3, 4]`** and **`[1, 2, 3, 4]`** <br> Both variables reflect the change because they reference the exact same array in memory. |