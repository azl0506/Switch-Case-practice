//Question 8: Parking Fee Calculator
//Create a program that computes the total parking fee based on vehicle type and hours parked.

const prompt= require('prompt-sync')();
let vehicle=(prompt("Enter your vehicle type: "));
let hours=parseInt(prompt("Enter hours for parking: "));
switch(vehicle){
    case "motorcycle":
        per=2.00
        break;

    case "car":
        per=3.00
        break;
        
    case "suv":
        per=4.00
        break;
        
    case "truck":
        per=5.00
        break;  
          

    default:
        per="an invalid vechile for system."
}
let TotalFee = hours*per
console.log("For a " + vehicle + ", per hour is $" + per + ". Your total amount is: $" + TotalFee )