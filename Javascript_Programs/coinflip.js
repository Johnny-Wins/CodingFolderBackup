//This program will simulate flipping a coin. User input will determine
//how many times the coin is flipped, and results will be displayed as follows:

//How many times should I toss the coin? 1000
//Results of 1000 tosses.
//Heads: 483, tails: 517

//Load Readline
const readlineSync = require('readline-sync');
//Load the Math library's relevant functions
const math = require('math.js')
//Enter the main program
const main = function() {
//	Initialize "Heads" and "Tails" as 0
	let Heads = 0;
	let Tails = 0;
//	Ask user "How many times should I toss the coin? " Storing the result
//	in the letiable "FlipCount"
	let FlipCount = readlineSync.question('How many times should I toss the coin? ');
	let Count = FlipCount
//	Use a loop to Call the function "flip" a number of times equal to "FlipCount"
	while (Count > 0)
	{
//		If FlipCount returns "heads" increment Heads. If Else, increment Tails.
		let Coin = flip()
		if (Coin == "Heads") 
			Heads += 1;
		else
			Tails += 1;
//		Decrement Count
		Count = Count - 1
	}
//	Display: 
//	"Result of "[FlipCount]" Tosses."
	console.log("Result of ", FlipCount, " Tosses.");
//	"Heads: "[Heads]":, tails:"[tails]
	console.log("Heads: ", Heads, ":, tails:", Tails);
};

//Description of "flip" function
const flip = function() {
//	use random (from the math library) to set the Coin to 1 or 2
	Coin = math.floor(math.random() * 2)
//	If Coin = 1
	if (Coin == 1)
//		Return "Heads"
{
		return "Heads";
}
//	If Coin = 0
	if (Coin == 0)
//		Return "Tails"
{
	return "Tails";
}
	else
		return "Something is horribly wrong"
};
//Run main

main()
