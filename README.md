

```markdown
# JavaScript Fundamentals

Oka clean and organized guide JavaScript basic and advanced concepts nerchukovadaniki.

## 📌 Table of Contents
1. [Variables & Data Types](#1-variables--data-types)
2. [Objects & JSON](#2-objects--json)
3. [Functions & Callbacks](#3-functions--callbacks)
4. [Arrays & Basic Methods](#4-arrays--basic-methods)
5. [Higher-Order Array Methods](#5-higher-order-array-methods)
6. [Important Concepts (== vs ===)](#6-important-concepts--vs-)

---

## 1. Variables & Data Types
JavaScript lo major ga 7 primary data types unnay:
* **String:** Text data (`"John"`)
* **Number:** Numbers (`25`, `999.99`)
* **Boolean:** True leda False (`true`, `false`)
* **Null:** Intentional ga empty value pettadam (`null`)
* **Undefined:** Variable declare chesi value ivvakapovadam (`undefined`)
* **Array:** Group of data (`[...]`)
* **Object:** Key-value pairs (`{...}`)

```javascript
let name = "John";           // String
let age = 25;                // Number
let isValid = true;          // Boolean
let address = null;          // Null
let phoneNumber;             // Undefined
let hobbies = ["reading", "coding"]; // Array

// ES6 Const (Immutability - Value ni change cheyalem)
const PI = 3.14;
// PI = 3.15; // Error throw chestundi

```

---

## 2. Objects & JSON

* **Object:** Real-world entity yokka properties ni store cheyadanki vadatham.
* **JSON (JavaScript Object Notation):** Server ki data pampetappudu text format (String) lo pampadaniki vadatham.

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

// JSON String ni JS Object ga marchadaniki JSON.parse() vadali
const customer = JSON.parse(customerJSON);
console.log(customer.name); // Output: Alice

```

---

## 3. Functions & Callbacks

* **Traditional Function:** Normal ga function keyword tho declare chesedi.
* **Arrow Function (ES6):** Variable laaga short-cut lo declare chesedi.
* **Callback Function:** Oka function ni inkoka function ki argument ga pass cheyadam.

```javascript
// Arrow Function
const calculateFinalPrice = (price, discountPercentage) => {
  return price - (price * discountPercentage) / 100;
};

// Callback Function Example
function processOrder(callback) {
  console.log("Processing order...");
  callback(); // Argument ga vachina function ni run chestundi
}

processOrder(() => {
  console.log("Payment successful, order completed.");
});

```

---

## 4. Arrays & Basic Methods

Data ni oka group la store cheyadanki Arrays vadatham.

```javascript
const products = [
  { id: 1, name: "Laptop", price: 999.99, rating: 4.5, stock: 50, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 599.99, rating: 4.2, stock: 100, category: "Electronics" },
  { id: 3, name: "Tablet", price: 299.99, rating: 4.0, stock: 75, category: "Electronics" }
];

// .push() - Array chivarlo kotha item add chestundi
products.push({ id: 4, name: "Headphones", price: 199.99, rating: 4.3, stock: 150, category: "Electronics" });

// .pop() - Array chivari item ni remove chestundi
// products.pop();

```

---

## 5. Higher-Order Array Methods

Array paina advanced operations cheyadaniki built-in methods:

### A. `forEach()`

Array lo unna prathi item paina oka function ni execute chestundi (Just looping).

```javascript
products.forEach((p) => {
  console.log(`${p.name} - $${p.price}`);
});

```

### B. `filter()`

Manam icchina condition batti match ayina items tho oka kotha array create chestundi.

```javascript
// Rating 4.2 paina unna products matrame filter avthay
const highRated = products.filter((p) => p.rating >= 4.2);

```

### C. `find()`

Condition ki match ayina **Frist Item** ni matrame return chestundi.

```javascript
// ID 3 unna product ni ethukuthundi
const productById = products.find((p) => p.id === 3);

```

### D. `map()`

Array lo unna items nundi specific data ni extract chesi leda modify chesi kotha array isthundi.

```javascript
// Anni products yokka categories ni matrame teesi kotha list chestundi
const categories = products.map((p) => p.category); // ['Electronics', 'Electronics', ...]

```

### E. `reduce()`

Array lo unna values annitini kalipi oka single output (Total sum) ga chestundi.

```javascript
// Accumulator (total) ki 0 initial value icchi, prathi product stock ni add chestundi
const totalStock = products.reduce((total, p) => total + p.stock, 0);

```

---

## 6. Important Concepts (== vs ===)

* `==` (Loose Equality): Kevalam value ni matrame check chestundi (Type automatic ga convert avtundi).
* `===` (Strict Equality): Value tho paatu Data Type ni kuda check chestundi.

```javascript
'1' == 1  // true (endukante data type ni pattinchukodu)
'1' === 1 // false (endukante '1' string, 1 number)

```

```

```
