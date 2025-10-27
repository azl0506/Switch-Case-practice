//Question 4: Programming Language
//Ask for a file extension (.js, .py, .java, .cpp, .html) and display the programming language name.

const prompt= require('prompt-sync')();
let language=(prompt("Enter file extension for the programming laguage: ."));


switch(language){
    case "js":
        PL="JavaScript"
        break;

    case "py":
        PL="Python"
        break;
        
    case "java":
        PL="Java"
        break;
        
    case "cpp":
        PL="C++"
        break;  
        
    case "html":
        PL="HTML (HyperText Markup Language)"
        break;    

    default:
        PL="an invalid File Extension."
}
console.log("The Programming Language for ." + language + " will be " + PL)
