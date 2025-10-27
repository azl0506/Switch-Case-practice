//Question 5: Salary Bonus Calculator
//Create a program that calculates an employee’s bonus and total salary based on their level in the company.

const prompt= require('prompt-sync')();
let elevel=(prompt("Enter your employee level: "));
let base=parseInt(prompt("Enter your Base Salary: "));

switch(elevel){
    case "Junior":
        bonusw="5% bonus"
        bonus=.5
        break;

    case "Mid":
        bonusw="10% Bonus"
        bonus=.10
        break;
        
    case "Senior":
        bonusw="15% bonus"
        bonus=.15
        break;
        
    case "Lead":
        bonusw="20% bonus"
        bonus=.20
        break;  
          

    default:
        bonusw="an invalid Employee level."
}
let finalsalary=base+(base*bonus)
console.log(elevel + " gets a " + bonusw + " so your final salary is " + finalsalary)
