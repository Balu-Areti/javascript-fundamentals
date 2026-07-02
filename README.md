
```markdown
# JavaScript Fundamentals

A clean and organized guide to learning basic and advanced JavaScript concepts.

## 📌 Table of Contents
1. [Variables & Data Types](#1-variables--data-types)
2. [Objects & JSON](#2-objects--json)
3. [Functions & Callbacks](#3-functions--callbacks)
4. [Arrays & Basic Methods](#4-arrays--basic-methods)
5. [Higher-Order Array Methods](#5-higher-order-array-methods)
6. [Important Concepts (== vs ===)](#6-important-concepts--vs-)

---

## 1. Variables & Data Types
There are 7 primary data types in JavaScript:
* **String:** Text data (`"John"`)
* **Number:** Numbers (`25`, `999.99`)
* **Boolean:** True or False (`true`, `false`)
* **Null:** Intentionally setting an empty value (`null`)
* **Undefined:** Declaring a variable without assigning a value (`undefined`)
* **Array:** A collection of data (`[...]`)
* **Object:** Key-value pairs (`{...}`)

```javascript
let name = "John";           // String
let age = 25;                // Number
let isValid = true;          // Boolean
let address = null;          // Null
let phoneNumber;             // Undefined
let hobbies = ["reading", "coding"]; // Array

// ES6 Const (Immutability - Value cannot be changed)
const PI = 3.14;
// PI = 3.15; // This will throw an error

```

---

## 2. Objects & JSON

* **Object:** Used to store properties of a real-world entity.
* **JSON (JavaScript Object Notation):** Used to send data to a server in a text (String) format.

```javascript
// JavaScript Object
const product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  address: {
    street: "123 Main St",
    city: "Techville"
  }
};

// JSON String (Stringified Object)
const customerJSON = `{"id": 1, "name": "Alice", "email": "alice@gmail.com"}`;

// Use JSON.parse() to convert a JSON String into a JS Object
const customer = JSON.parse(customerJSON);
console.log(customer.name); // Output: Alice

```

---

## 3. Functions & Callbacks

* **Traditional Function:** Declared normally using the function keyword.
* **Arrow Function (ES6):** A shorter syntax for declaring functions, often assigned to a variable.
* **Callback Function:** A function passed as an argument to another function.

```javascript
// Arrow Function
const calculateFinalPrice = (price, discountPercentage) => {
  return price - (price * discountPercentage) / 100;
};

// Callback Function Example
function processOrder(callback) {
  console.log("Processing order...");
  callback(); // Executes the function passed as an argument
}

processOrder(() => {
  console.log("Payment successful, order completed.");
});

```

---

## 4. Arrays & Basic Methods

Arrays are used to store multiple values in a single variable.

```javascript
const products = [
  { id: 1, name: "Laptop", price: 999.99, rating: 4.5, stock: 50, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 599.99, rating: 4.2, stock: 100, category: "Electronics" },
  { id: 3, name: "Tablet", price: 299.99, rating: 4.0, stock: 75, category: "Electronics" }
];

// .push() - Adds a new item to the end of the array
products.push({ id: 4, name: "Headphones", price: 199.99, rating: 4.3, stock: 150, category: "Electronics" });

// .pop() - Removes the last item from the array
// products.pop();

```

---

## 5. Higher-Order Array Methods

Built-in methods for performing advanced operations on arrays:

### A. `forEach()`

Executes a provided function once for each array element (Looping).

```javascript
products.forEach((p) => {
  console.log(`${p.name} - $${p.price}`);
});

```

### B. `filter()`

Creates a new array with all elements that pass the provided condition.

```javascript
// Filters only the products with a rating of 4.2 or higher
const highRated = products.filter((p) => p.rating >= 4.2);

```

### C. `find()`

Returns only the **first item** that matches the condition.

```javascript
// Finds the product with ID 3
const productById = products.find((p) => p.id === 3);

```

### D. `map()`

Creates a new array by extracting or modifying specific data from the existing items.

```javascript
// Extracts only the categories of all products to create a new list
const categories = products.map((p) => p.category); // ['Electronics', 'Electronics', ...]

```

### E. `reduce()`

Reduces the array to a single output value (e.g., total sum) by accumulating the items.

```javascript
// Provides an initial value of 0 to the accumulator (total) and adds each product's stock
const totalStock = products.reduce((total, p) => total + p.stock, 0);

```

---

## 6. Important Concepts (== vs ===)

* `==` (Loose Equality): Checks only the value (Performs automatic type conversion).
* `===` (Strict Equality): Checks both the value and the Data Type.

```javascript
'1' == 1  // true (because it ignores the data type)
'1' === 1 // false (because '1' is a string and 1 is a number)

```

```

```
