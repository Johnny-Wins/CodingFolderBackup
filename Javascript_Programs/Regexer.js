//Regex tester

//Load Readline
const readlineSync = require('readline-sync');

tested = 1
while (tested != "0")
{
	//Request user input:
	let tested = readlineSync.question("Enter some text you want to test  with regex, or 0 to quit program:\n");
	console.log("Testing",tested,"...");
	let parameter = new RegExp("[@,#,&%\^]");
	console.log(parameter.test(tested));
}