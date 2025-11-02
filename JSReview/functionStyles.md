
# 📝 JavaScript Fundamentals: Functions and 'this'

This document provides a concise overview of modern JavaScript function definitions and the crucial behavior of the `this` keyword.

---

## 1. Function Definitions: Declarations vs. Expressions

There are two primary ways to create functions in JavaScript, and the choice affects when the function is available (hoisting).

### A. Function Declaration (Hoisted)

This is the traditional method, beginning with the `function` keyword.

* **Key Feature:** Function Declarations are **hoisted**. The function can be called anywhere in the code, even *before* its definition line.

```javascript
// Function Declaration
function calculateArea(length, width) {
    return length * width;
}
````

### B. Function Expression (Not Hoisted)

A function (often anonymous) is defined and then assigned to a variable (usually using `const`).

  * **Key Feature:** Function Expressions are **not hoisted**. You must define the variable before you can call the function.

<!-- end list -->

```javascript
// Function Expression
const calculatePerimeter = function(length, width) {
    return 2 * (length + width);
};
```

-----

## 2\. Arrow Functions (`=>`): The Concise Syntax

Arrow functions are a modern, concise alternative to Function Expressions. They simplify syntax and have a unique rule for `this`.

| Feature | Standard Function Expression | Arrow Function |
| :--- | :--- | :--- |
| **Full Syntax** | `const add = function(a, b) { return a + b; }` | `const add = (a, b) => a + b;` |
| **Conciseness** | Requires `function` keyword, `return`, and `{}`. | For single expressions, **`return` and `{}` are optional** (implicit return). |
| **Single Param** | `const square = function(x) { return x * x; }` | `const square = x => x * x;` (No parentheses needed for the parameter `x`) |

-----

## 3\. The `this` Keyword: Context and Scope

The **`this`** keyword refers to the object that owns the executing code (the context). Its value changes based on how the function is called.

| Function Type | `this` Behavior | How Context is Determined |
| :--- | :--- | :--- |
| **Standard Function** (`function()`) | Has its **own, dynamic `this`**. | Determined by the object calling the function (e.g., `object.method()` sets `this` to `object`). |
| **Arrow Function** (`() =>`) | Has **no `this` of its own** (it is **lexical**). | **Inherits `this`** from its immediate surrounding parent scope. |

### Example

This demonstrates why standard functions must be used for methods when accessing object properties.

```javascript
const userA = {
    username: "Standard Sam",
    // Standard function: 'this' points to userA (correct)
    getGreeting: function() {
        console.log(`(Standard) Hello, I am ${this.username}.`);
    }
};

const userB = {
    username: "Arrow Amy",
    // Arrow function: 'this' points to the global object (INCORRECT for object method)
    getGreeting: () => {
        console.log(`(Arrow) Hello, I am ${this.username}.`);
    }
};

userA.getGreeting(); // Output: (Standard) Hello, I am Standard Sam.
userB.getGreeting(); // Output: (Arrow) Hello, I am undefined.
```