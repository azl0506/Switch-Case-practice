//Question 3: Movie Rating Guide
//Accept movie name and movie rating (G, PG, PG-13, R, NC-17) and display the appropriate audience guideline.

const prompt= require('prompt-sync')();
let movie=(prompt("Enter movie name: "));
let rating=(prompt("Enter rating on that movie: "));

switch(rating){
    case "G":
        guide= "suitable for all ages. Contains nothing that would offend parents for viewing by children. "
        break;

     case "PG":
        guide= "some material may not be suitable for children. Parental guidance is recommended. "
        break;
        
    case "PG-13":
        guide= "some material may be inappropriate for children under 13. "
        break;
        
    case "R":
        guide= "under 17 requires accompanying parent or adult guardian. "
        break;
        
    case "NC-17":
        guide= "clearly adult films. No one 17 and under is admitted, even with a parent or guardian. "
        break;   
        
    default:
        guide= "an invalid Movie rating, cannot determine the guideline."

}
console.log("For the movie " + movie + " and movie rating " + rating + " it is " + guide )
