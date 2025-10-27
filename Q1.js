//Question 1: Coffee Size Pricing
//Create a program that asks the user for a coffee size (small, medium, large, extra large) and displays the corresponding price using a switch statement.

const prompt= require('prompt-sync')();
let coffeesize=(prompt("Enter coffee size for price: "));

switch(coffeesize){
    case "small":
        price=2.50
        break;

    case "medium":
        price=3.50
        break;
        
    case "large":
        price=4.25
        break;
        
    case "extra large":
        price=5.00
        break;    

    default:
        price="invalid size"
}
console.log("For a " + coffeesize + " it will be " + price)

