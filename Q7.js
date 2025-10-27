//Question 7: Currency Converter
//Create a program that converts USD to another currency using sample conversion rates.

const prompt= require('prompt-sync')();
let usd=parseInt(prompt("Enter the amount in USD: "));
let convert=(prompt("Enter the statement for conversion rates: "));

switch(convert){
    case "EUR":
        rate=0.93
        break;

    case "GBP":
        rate=0.80
        break;
        
    case "JPY":
        rate=150.20
        break;
        
    case "AUD":
        rate=1.52
        break;  
          

    default:
        rate="an invalid statement for conversion."
}
let currency = usd*rate
console.log("Your total amount is: " + currency )


