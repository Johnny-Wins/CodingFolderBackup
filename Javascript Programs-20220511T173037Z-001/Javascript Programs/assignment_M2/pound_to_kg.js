//This program will accept a user input into the variable "Pounds",
//convert it into kilograms using the full conversion value (mult-
//iply by 0.453592) and then display the kilogram output.

//Initialize readlineSync
const readlineSync = require('readline-sync');
//Prompt user for Pounds
var Pounds = readlineSync.question('Please input a weight in pounds. ');
//Output value in kilograms to three decimal places.
console.log("In kilograms, that is "+((Pounds * 0.453592).toFixed(3)+"kg"));