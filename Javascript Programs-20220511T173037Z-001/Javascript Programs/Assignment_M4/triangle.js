//This program will use nested loops to generate a triangle.
//It will be in the following general shape:
//ooooo
// oooo
//  ooo
//   oo
//    o
//But will have a number of lines determined by user input.

//Load Readline
const readlineSync = require('readline-sync');
//Enter main
const main = function() {
//	Ask user "How many lines in the triangle?:", storing the 
//	answer in "Line"
	let Lines = readlineSync.question('How many lines would you like in the triangle? ');
	let Line = Lines
//	Print a newline
	console.log("\n");
//	Enter a loop that will repeat while Line is greater than 0
	while (Line > 0)
	{
//		Define Letters as equal to Line 
		let Letters = Line;
//		Define Spaces as equal to Line 
		let Spaces = Lines - Letters;
//		Enter a loop that will repeat while Spaces is greater than 0
		while (Spaces > 0)
		{
//			Print a space (without a newline)
			process.stdout.write(" ");
//			Decrement Spaces 
			Spaces = Spaces - 1;
		}
//		Enter a loop that will repeat while Letters is greater than 0
		while (Letters > 0)
		{
//			Print an "o"
			process.stdout.write("o");
//			Decrement Letters 
			Letters = Letters - 1;
		}
//		Print a newline 
		console.log("\n")
//		Decrement Line
		Line = Line - 1
	}
}
main()