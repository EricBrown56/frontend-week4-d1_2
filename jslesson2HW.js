// Assignment 1: Create a shopping cart program that calculates the total of items 
// in the cart and displays a welcome message if the user is logged in.

let login = true;

if (login) {
    console.log("Welcome! You may add items in your cart.");
}

const apple = 2.50;
const banana = 1.50;
const orange = 3.00;

let cart = [apple , banana , orange];

let total = (apple + banana + orange);

console.log("Your total is: $" + total);

// Assignment 2: Simple Banking System

let balance = 1000;

function deposit(amount) {
    balance += amount;
    return console.log(`After depositing $${amount}, your current balance is: $${balance}`);
}

function withdraw(amount) {
    if (amount > balance) {
        return console.log("Insufficient funds. Please try again.");
    }
    else if (amount < balance) {
        balance -= amount;
        return console.log(`After withdrawing $${amount}, your current balance is: $${balance}`);
    
}
}

function checkBalance() {
    return console.log(`Your current balance is: $${balance}`);
}

console.log(deposit(500));
console.log(withdraw(200));
console.log(checkBalance());



