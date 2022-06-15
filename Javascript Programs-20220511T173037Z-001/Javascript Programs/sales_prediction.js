//This program will accept user input in the variable "Sales",
//then display 23% of that value.

//Initialize readlineSync
const readlineSync = require('readline-sync');
//Prompt user for the year's sales total and accept their input
var Sales = readlineSync.question('What were your sales this year? ');
//Display 23% of sales total
console.log("The expected profit for this year is $"+(Sales * 0.23).toFixed(2));