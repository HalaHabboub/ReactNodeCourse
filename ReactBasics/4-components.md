# React Components

## What are Components?

Components are the building blocks of React applications. There are two main types:

1. **Function Components**
2. **Class Components**

---

## Function Components

**Function components** are simple JavaScript functions that take **props** as input and return **JSX elements**.

### Characteristics:
- Simple and concise
- Written as JavaScript functions
- Take `props` as parameter
- Return JSX

### Example:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Or using arrow function
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
```

### Common Use Cases:
- **Presentational components** - Components that just display UI
- **Stateless components** - Components that don't need to manage state (before Hooks)

---

## Class Components

**Class components** are ES6 classes that extend from `React.Component` or `React.PureComponent`.

### Characteristics:
- Written as ES6 classes
- Must have a `render()` method
- Can manage state
- Have access to lifecycle methods

### Example:
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Common Use Cases:
- Components that need to **manage state**
- Components that need **lifecycle methods** (componentDidMount, componentDidUpdate, etc.)

---

## The Evolution: React Hooks

With the introduction of **React Hooks** (in React 16.8), function components gained new abilities:

### Before Hooks:
- **Function components** = Only for simple, stateless UI
- **Class components** = Required for state and lifecycle methods

### After Hooks:
- **Function components** can now:
  - Manage state (using `useState`)
  - Use lifecycle-like features (using `useEffect`)
  - Access context, refs, and more

This **blurred the distinction** between function and class components.

---

## Function vs Class Components Today

### Function Components (Modern Approach):
```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### Class Components (Traditional Approach):
```jsx
import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidUpdate() {
    document.title = `Count: ${this.state.count}`;
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

**Both do the same thing!**

---

## Current State of React Components

### Both Types Still Widely Used:
- **New projects** typically use function components with Hooks
- **Legacy codebases** often have class components
- **Both are fully supported** by React
- You'll encounter both in real-world applications

### Trend:
- **Function components with Hooks** are becoming the preferred approach
- They're more concise and easier to understand
- They avoid common pitfalls of class components (`this` binding issues)

---

## Key Differences Summary

| Feature | Function Components | Class Components |
|---------|---------------------|------------------|
| **Syntax** | JavaScript function | ES6 class |
| **State** | `useState` Hook | `this.state` |
| **Lifecycle** | `useEffect` Hook | Lifecycle methods |
| **`this` keyword** | Not needed | Required |
| **Code length** | Shorter, cleaner | More verbose |
| **Performance** | Slightly better | Slightly heavier |
| **Learning curve** | Easier | Steeper |

---

## Resources

### Deep Dive into Components and Hooks:
- [Function Component vs Class Component in React - freeCodeCamp](https://www.freecodecamp.org/news/function-component-vs-class-component-in-react/)

---

## Key Takeaways

- **Two types:** Function components and class components
- **Function components** = Simple functions that return JSX
- **Class components** = ES6 classes with `render()` method
- **React Hooks** = Game-changer that gave function components superpowers
- **Before Hooks:** Clear separation (stateless vs stateful)
- **After Hooks:** Function components can do everything class components can
- **Both are valid** and widely used in React applications today
- **Modern trend:** Function components with Hooks
