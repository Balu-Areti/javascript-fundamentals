console.log("Status: Success!");

// ==========================================
// 1. VARIABLES & DATA TYPES
// ==========================================
/*
  JavaScript Data Types:
  1. String  2. Number  3. Boolean  4. Null
  5. Undefined  6. Array  7. Object
*/


let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let address = null; // Null
let phoneNumber; // Undefined
let hobbies = ["reading", "traveling", "coding"]; // Array
let hobby = "reading"; // String

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Is Student: ${isStudent}`);
console.log(`Address: ${address}`);
console.log(`Phone Number: ${phoneNumber}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Favorite Hobby: ${hobby}`);

// ==========================================
// ES6 Features const(Immutable) & let(mutable)
// ==========================================
const pi = 3.14159; // Constant value
let radius = 5; // Mutable value
console.log(`Pi: ${pi}`);
console.log(`Radius: ${radius}`);

// what is the difference between mutable and immutable variables?
// Mutable variables can be changed after they are declared, while immutable variables cannot be changed once they are assigned a value. 
// In JavaScript, 'let' is used for mutable variables, and 'const' is used for immutable variables.



// ==========================================
// 2. OBJECTS & JSON
// ==========================================

// JavaScript Object
const product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
  discountPercentage: 10,
  rating: 4.5,
  stock: 50,
  brand: "TechBrand",
  category: "Electronics",
  address: {
    street: "123 Main St",
    city: "Techville",
  },
};

console.log("------Product Details:------");

console.log(`Product Name: ${product.name}`, `Product Price: $${product.price}`);
console.log(`Product Discount: ${product.discountPercentage}%`);
console.log(`Product Rating: ${product.rating}`);
console.log(`Product Stock: ${product.stock}`);
console.log(`Product Brand: ${product.brand}`);
console.log(`Product Category: ${product.category}`);
console.log(`Product Address: ${product.address.street}, ${product.address.city}`);



// JSON (JavaScript Object Notation) - Stringfy version of an object
const customerJSON = `{"id": 1, "name": "John Doe", "email": "john.doe@example.com"}`;
console.log("------Customer Details (JSON):------");
console.log(customerJSON);

// Parsing JSON back to an object
// Convert JSON string to JavaScript object using JSON.parse()
const customerObject = JSON.parse(customerJSON);
console.log("------Customer Details (Object):------");
console.log(`Customer ID: ${customerObject.id}`);
console.log(`Customer Name: ${customerObject.name}`);
console.log(`Customer Email: ${customerObject.email}`);



// ==========================================
// 3. FUNCTIONS & CALLBACKS
// ==========================================
// Traditional Function
function calculateDiscountedPrice(price, discountPercentage) {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}
console.log("------Discount price:------ " + calculateDiscountedPrice(product.price, product.discountPercentage));



//ES6 Arrow Function
const calculateFinalPrice = (price, discountPercentage) => {
  return price - (price * discountPercentage) / 100;
};
console.log("Final price (Arrow Function): " + calculateFinalPrice(product.price, product.discountPercentage));

// Callback Function (passing a function as an argument to another function

function processOrder(callback){
  console.log("Processing order...");
  callback(); // Executing the passed function
}

processOrder(() =>{
  console.log("Order processed successfully!");
})




// ==========================================
// 4. ARRAYS
// ==========================================


const products = [
  { id: 1, name: "Laptop", price: 999.99, rating: 4.5, stock: 50, brand: "TechBrand", category: "Electronics" },
  { id: 2, name: "Smartphone", price: 699.99, rating: 4.2, stock: 100, brand: "PhoneBrand", category: "Electronics" },
  { id: 3, name: "Headphones", price: 199.99, rating: 4.0, stock: 200, brand: "AudioBrand", category: "Electronics" },
  { id: 4, name: "Smartwatch", price: 299.99, rating: 4.3, stock: 75, brand: "WatchBrand", category: "Electronics" },

];


console.log(`Number of products: ${products.length}`);


// Basic Array methods (push &Pop)
products.push({ id: 5, name: "Tablet", price: 499.99, rating: 4.1, stock: 80, brand: "TabBrand", category: "Electronics" });
console.log(`Number of products after adding a new product: ${products.length}`);

//pop method removes the last element from an array and returns that element. This method changes the length of the array.
products.pop();
console.log(`Number of products after removing the last product: ${products.length}`);




// ==========================================
// 5. HIGHER-ORDER ARRAY METHODS
// ==========================================

// helper Function to print product details nicely

const printProductDetails = (p) => {
  console.log(`[${p.id}] ${p.name} - $${p.price} | Rating: ${p.rating} | Stock: ${p.stock}`);
};

// A. forEach() - Iterates over each element in the array and executes a provided function for each element.
console.log("------Product Details (forEach):------");
products.forEach((p)=> printProductDetails(p));

// B. filter() - Creates a new array based on condition
console.log("------Products with rating >= 4.2 (filter):------");
const highRatedProducts = products.filter((p)=> p.rating >= 4.2);
highRatedProducts.forEach((p)=> printProductDetails(p));

console.log("\n--- Affordable Products ($299 - $599) ---");
const affordableProducts = products.filter((p) => p.price >= 299 && p.price <= 599);
affordableProducts.forEach(printProductDetails);

// C. find() - Returns the FIRST element that matches the condition
console.log("\n--- Find Product by ID (ID: 3) ---");
const productByID = products.find((p)=> p.id ===3);
if(productByID) printProductDetails(productByID);

// D. map() - Creates a new array by extracting or modifying data
console.log("\n--- Product Categories (map) ---");
const productCategories = products.map((p)=> p.category);
console.log(productCategories);

// E. reduce() - Calculates a single value from the array
console.log("\n--- Total Stock Calculation (reduce) ---");
const totalStock = products.reduce((total, p) => total + p.stock, 0);
console.log(`Total Stock Across All Products: ${totalStock}`);

// ==========================================
// 6. IMPORTANT JAVASCRIPT CONCEPTS
// ==========================================

/*
  Equality Operators:
  ==  (Loose Equality)  : Checks only value (e.g., '1' == 1 is true)
  === (Strict Equality) : Checks value AND data type (e.g., '1' === 1 is false)
*/

// Template Literals (Using backticks ` ` for easier string formatting)
console.log(`\nLearning JavaScript is fun! Total stock is ${totalStock}.`);
