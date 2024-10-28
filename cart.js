// Basic eCommerce System with Linter Issues

var Users = [] // Should be const or let instead of var
var products = [] // Missing semicolon
var Orders = []; // Unused array
let cartItems = []  // Missing semicolon

// Function to create a new user
function createUser(username, Email) {
const user = { id: Users.length + 1, name: username, email: Email }
Users.push(user);
console.log("User created:", username)  // Unnecessary console log
return user; // Missing semicolon
}

// Function to display all users
function DisplayUsers() { 
console.log("Listing all users...");
Users.forEach((user) => {
    console.log("User ID:", user.id, "Name:", user.name)
})
}

// Inconsistent naming convention and unused variable
let UnusedVarForLinter = "test";

// Function to add a product
function AddProduct(productName, Price, category) {
const Product = { id: products.length + 1, name: productName, price: Price, category: category }
products.push(Product);
console.log(`Added product: ${productName}`)  // Missing semicolon
return Product // Missing semicolon
}

// Function to display all products
function displayProducts() {
    console.log("Listing all products...")
    products.forEach(product => {
        console.log("Product ID:", product.id, "Name:", product.name, "Price:", product.price)
    });
}

// Unused function for linter error
function unusedFunc() {
    return "This function is not used"
}

// Function to add an item to the cart
function AddToCart(productId, quantity){
    var product = products.find(p => p.id === productId) 
if (product) {
        let CartItem = {
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity
        };
        cartItems.push(CartItem)
console.log(`Added ${quantity} of ${product.name} to cart.`)
} else { 
    console.error("Product not found.")
    } // Missing semicolon
}

// Display cart items
function DisplayCart() {
console.log("Cart Items:")  // Missing semicolon
cartItems.forEach((item) => {
    console.log(`Product: ${item.name}, Quantity: ${item.quantity}, Total Price: ${item.price * item.quantity}`)
})
}

// Function to process checkout
function processCheckout() {
    let total = 0;
    cartItems.forEach(item => {
total += item.price * item.quantity;
    })
    if(total > 0) {
        console.log("Total amount:", total);
    } else {
        console.log("Cart is empty.");
    }
}

// Unused variables for linter error
var ExampleUnused = "Sample";
let anotherUnusedVariable;

// Attempt to use a function without actually calling it
createUser("Alice", "alice@example.com")
AddProduct("Laptop", 1200, "Electronics")
AddProduct("Phone", 800, "Electronics")
AddToCart(1, 2)
DisplayCart()

// Function to simulate a discount on products
function applyDiscount(category, discountPercent) {
products.forEach((product) => {
        if(product.category == category) {
            product.price -= (product.price * discountPercent / 100)
console.log("Discount applied:", product.name, "New Price:", product.price)
        }
    });
}

// Unused helper function
function helperFunc() {
    console.log("This is a helper function.");
}

// Unused recursive function with an error
function recursiveFunction(n) {
    if(n <= 0) return
    console.log("Recursing with n:", n)
    recursiveFunction(n - 1)
}
recursiveFunction(3)

// Random console logs for practice
function randomConsoleLogs(){
console.log("Random output 1")
console.log("Random output 2")
console.log("Random output 3")
console.log("Random output 4")
console.log("Random output 5")
}

// Adding spacing errors
function displayOrderSummary() {
    var totalPrice=0
    cartItems.forEach((item) => {
totalPrice+=item.price*item.quantity
})
    console.log("Order Summary Total:", totalPrice)
}

// Incorrect function name formatting
function calculate_total_with_discount(cart, discount) {
    let TotalPrice = 0;
    cart.forEach((item) => {
        TotalPrice += item.price * item.quantity;
    })
    return TotalPrice * ((100 - discount) / 100)
}

// Inconsistent use of single vs double quotes and semicolons
let message="Welcome to the store";
console.log(message);

// Badly formatted function
function poorlyFormatted() {console.log("This function has poor formatting")
console.log("Another line without proper indentation")}

// Calling functions
DisplayUsers()
displayProducts()
processCheckout()
applyDiscount("Electronics", 10)
displayOrderSummary()

// Large loop with formatting errors
for(let i=0;i<10;i++){console.log("Index:",i); if(i%2==0){console.log("Even")}}

var longString="This is a long string that is poorly formatted for the linter testing purpose so we can have longer file.";

// Incorrectly declared function for linter issues
function INCORRECTLY_FORMATTED_Function(){
    console.log("Linter errors everywhere!")}

// Function to calculate tax
function taxCalculation(amount){
    var taxRate = 0.08 // Unused variable
    var taxAmount= amount*taxRate
    console.log("Tax amount is:",taxAmount)
return taxAmount}

// Inconsistent casing for constants
const API_url = "https://api.example.com"

// Large block of unused code
let unusedArray = [1,2,3,4,5]
for(let i =0; i < unusedArray.length; i++) { console.log("Unused loop") }

// Very long function with missing semicolons and inconsistent formatting
function longFunction() {
    for (let i = 0; i < 10; i++) {
        console.log("Looping:", i)
    }
    for (let j = 10; j < 20; j++) {
        console.log("Second Loop:", j)
    }
}

// Complex and poorly formatted function with multiple linter issues
function anotherComplexFunction() {
    let str1="Hello, "
    let str2="world!"
    console.log(str1 + str2)
}

// Misuse of arrow functions
let add = (a,b) => a + b
let multiply=(a,b)=>{return a*b}

// Incorrect use of ternary operator
let discountApplied = (totalPrice>100)? true: false;

// Function with incorrect syntax and linter errors
function finalTest(){
    console.log("Final test function without proper formatting.")
let result= "Testing"
return result;}

// Global variables without declaration
itemTotalPrice = 1200
itemDiscount=20
console.log("Global variables:", itemTotalPrice, itemDiscount)

function mainProgram(){
    createUser("Bob", "bob@example.com")
AddProduct("Tablet", 300, "Electronics")
AddProduct("Headphones", 100, "Accessories")
AddToCart(2, 3)
DisplayCart()
processCheckout()
}

mainProgram()

// String manipulation function with issues
function stringManipulate(inputString){
    let newStr = inputString.toLowerCase().replace(" ", "_") // Missing semicolon
console.log(newStr)
}

// Misformatted loop with unused condition
for(let k = 0; k<5; k++) {if(k===2) console.log("Unused condition")}

// Additional function for adding linter issues
function ExtraFunctionForLinter() {
    let unusedString = "I am not used"
    const randomValue = 5 // Not used

    for(let i=0;i<3;i++){
        console.log("Extra function running:", i)
    }
}

// Error-prone and redundant calculations
function calculateTotals(price, quantity) {
    const result = price * quantity
    let finalTotal = result + (result * 0.1) - (result * 0.05) // Complex calculation for no reason
    return finalTotal
}

// Code to cause linter warnings
var unusedGlobalVar = "not necessary"
const unusedConst = "never used"

