//Question 9: Temperature Converter with Operations
//Create a program that converts a temperature between Celsius and Fahrenheit.

const prompt= require('prompt-sync')();
let con=(prompt("Enter conversion for C2F or F2C: "));
let temp=parseInt(prompt("Enter tempature: "));
switch(con){
    case "C2F":
        result1=(temp*9/5)+32
        console.log("for celsius to fahrenheit it will be " + result1)
        break;
        
    case "F2C":
        result2=(temp-32)*5/9
        console.log("for fahrenheit to celsius it will be " + result2)
        break;  
          

    default:
        console.log("Invalid.")
}
