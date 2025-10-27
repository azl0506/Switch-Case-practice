// Question 2: Season Finder
//Prompt the user to enter a month name and use a switch statement to determine and display which season it belongs to.

const prompt= require('prompt-sync')();
let month=(prompt("Enter month to find out the season: "));

switch(month){
    case "December":
    case "January":
    case "February":
        season="Winter"
        break;

    case "March":
    case "April":
    case "May":
        season="Spring"
        break;    

    case "June":
    case "July":
    case "August":
        season="Summer"
        break; 
        
    case "September":
    case "October":
    case "November":
        season="Fall"
        break;    

    default:
        season="Invalid"   
        
}

console.log("For a " + month + " it will be " + season)
