# Single Page Application (SPA)

## What is a Single Page Application?

A **Single Page Application (SPA)** is a web application that loads a **single HTML page** and **dynamically updates** that page as the user interacts with the app.

---

## Traditional Multi-Page vs SPA

### Traditional Approach (Multi-Page):
1. User clicks a link
2. Browser sends request to server
3. Server sends back a **completely new HTML page**
4. Browser loads and displays the new page
5. **Result:** Full page reload every time

### SPA Approach:
1. User clicks a link
2. JavaScript intercepts the action
3. JavaScript fetches only the **necessary data** from the server (via API)
4. JavaScript **updates the current page** dynamically
5. **Result:** Seamless experience, no page reload

---

## How SPAs Work

### Initial Load:
The first time you visit an SPA, it fetches **all necessary resources**:
- HTML (usually just one page)
- CSS
- JavaScript
- Initial data

### Subsequent Interactions:
After the initial load:
- **Client-side JavaScript** handles all user interactions
- **No full page reloads** - only parts of the page update
- JavaScript communicates with the server through **APIs** to fetch or update data
- Content is **mounted** (added) or **unmounted** (removed) dynamically

---

## Mounting and Unmounting

In an SPA, components are dynamically added to and removed from the page:

- **Mounting** = Adding a component to the page (rendering it)
- **Unmounting** = Removing a component from the page

**Example:**
- User navigates to "Home" → Home component is **mounted**
- User navigates to "About" → Home component is **unmounted**, About component is **mounted**
- All of this happens **without reloading the page**

---

## Benefits of SPAs

1. **Faster user experience** - No waiting for full page reloads
2. **Seamless navigation** - Smooth transitions between views
3. **Reduced server load** - Only data is fetched, not entire pages
4. **Better performance** - Once loaded, interactions are instant
5. **Mobile-app-like feel** - Feels more like a native application

---

## Why React is Called a Single Page Application

React applications are typically SPAs because:
- React loads **one HTML file** (`index.html`)
- React's JavaScript takes over and **dynamically renders** components
- Navigation happens **client-side** without page reloads
- React's **Virtual DOM** efficiently updates only what changed

---

## Resources

**Understanding SPAs in React:**
- [Why is React.js called a Single Page Application?](https://taglineinfotechus.medium.com/why-is-react-js-called-as-single-page-application-87864595d2ba)

---

## Key Takeaways

- **SPA** = One HTML page, dynamic updates via JavaScript
- **No page reloads** = Faster, smoother user experience
- **Mounting/Unmounting** = Components are added/removed dynamically
- **React** = Built for creating SPAs
- **API communication** = Fetch data without reloading the page
