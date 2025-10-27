//Question 6: Shipping Cost Calculator (Using Pounds)
//Create a program that calculates the total shipping cost based on the shipping zone and package weight in pounds (lb).

const prompt= require('prompt-sync')();
let zone=(prompt("Enter your package shipping zone: "));
let pounds=parseInt(prompt("Enter your packageweight in pounds: "));

switch(zone){
    case "local":
        per="$2.50"
        rate=2.50
        break;

    case "regional":
        per="$3.50"
        rate=3.50
        break;
        
    case "national":
        per="$5.00"
        rate=5.00
        break;
        
    case "international":
        per="$10.00"
        rate=10.00
        break;  
          

    default:
        per="an invalid shipping zone."
}
let totalCost = rate*pounds
console.log("For " +  zone + " shipping per pound will be " + per + " so your total in shipping is " + totalCost)