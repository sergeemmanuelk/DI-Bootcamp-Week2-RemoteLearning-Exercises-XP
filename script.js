console.log("*****Exercise 1*****")

var num = 8 
var num = 10
console.log(num) // Output : 10

console.log("*****Exercise 2*****")

function numbers() {
    for (let i = 0; i < 5; i += 1) {
        console.log(i) 
    }
    
    console.log(i)
}
numbers();

console.log("*****Exercise 3*****")

// Create a global variable that save the amount of money you have in your account
let amountAccount = 100000

// Create a variable that saves the amount of VAT
const VAT_RATE = 0.18

// Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
let expenses = 20000

// Create a JS code that multiplies of the expenses by the VAT
let vat = expenses * VAT_RATE

// Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu
amountAccount -= expenses + vat

// Display itDisplay it
console.log(`Amount account : ${amountAccount}`)