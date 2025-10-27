//Question 10: Gym Membership Duration Calculator
//Create a program that calculates the total cost of a gym plan based on duration and monthly rate.

const prompt= require('prompt-sync')();
let plan=(prompt("Enter the plan type: "));
let rate=parseInt(prompt("Enter monthly rate: "));
switch(plan){
    case "monthly":
        month=1
        discount=0.0
        break;
        
    case "quarterly":
        month=3
        discount=0.05
        break; 
        
    case "semi-annual":
        month=6
        discount=0.10
        break; 
        
    case "annual":
        month=12
        discount=0.20
        break;     
          

    default:
        console.log("Invalid.")
}
let originalCost = month * rate
let discountAmount = originalCost * (discount / 100)
let finalCost = originalCost - discountAmount
console.log("Your total will be " + finalCost)
