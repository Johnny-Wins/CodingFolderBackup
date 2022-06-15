// create object for IO that waits for user from console
// This requires
const readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');

// Echo back to user these are common ways to write to the console
console.log('Using method 1: Hi', userName, "!");
console.log('Using method 2: Hi ' + userName + " !");
console.log('Using method 3: Hi %s !',userName);