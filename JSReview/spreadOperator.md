# 📝 JavaScript Operators: Spread (`...`) and Rest (`...`)

The Spread and Rest operators use the same `...` syntax, but their function depends entirely on the context: Spread **expands** elements, while Rest **collects** elements.

---

## 1. The Spread Operator (`...`)

**Context:** Used on the **right side** of an assignment or in a function call.
**Purpose:** To unpack an iterable (array, object, string) into its individual elements.

| Use Case | Code Example | Rationale |
| :--- | :--- | :--- |
| **Copying/Cloning** | `const arr2 = [...arr1];` | Creates a **new shallow copy**, preventing mutation of the original array/object. |
| **Merging Arrays** | `const merged = [...arrA, ...arrB];` | Combines arrays into a single, new array. |
| **Merging Objects** | `const merged = {...objA, ...objB};` | Combines objects. If keys are duplicated (e.g., 'name'), the value from the **last** object (`objB`) wins. |
| **Inserting Elements** | `const newArr = [0, ...oldArr, 10];` | Easily inserts the contents of an array anywhere in a new array definition. |
| **String to Array** | `const chars = [..."Hello"];` | Expands the string into an array of individual characters. |

---

## 2. The Rest Operator (`...`)

**Context:** Used on the **left side** of an assignment (function parameters or destructuring).
**Purpose:** To collect multiple individual elements into a single array.

### A. Rest Parameters (Functions)

Allows a function to accept an **indefinite number of arguments** and collects them into a single array.

```javascript
function sumAll(fixedArg, ...restOfArgs) {
    // 'restOfArgs' is an array containing all arguments after fixedArg.
    return restOfArgs.reduce((total, n) => total + n, 0);
}

sumAll('start', 5, 10, 20); 
```
### B. Rest in Destructuring
Collects all remaining items in an array or object into a new variable.

```javascript
const [first, ...restColors] = ['red', 'green', 'blue', 'yellow']; 
// 'first' is 'red'
// 'restColors' is ['green', 'blue', 'yellow']
```