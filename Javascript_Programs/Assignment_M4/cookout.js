//This program will accept user input regarding the number of people coming
//to a cookout and how many hotdogs each guest will eat. Then, based on the
//facts that hot dogs come in packages of 10 and hot dog buns in packages
//of 8, it will display: #1 The minimum number of packages of hotdogs required;
//#2 the minimum number of packages of hot dog buns required; #3 the number of
//hotdogs that will be left over; #4 the number of hot dog buns that will be
//Left over.

//Load Readline
const readlineSync = require('readline-sync');
//Load the Math library's relevant functions
const math = require('math.js')
//Enter main
const main = function() {
//	Ask user how many people are coming to the cookout, storing answer in "People" 
	let People = readlineSync.question('How many people are coming to the cookout? ');
//	Ask user how many hotdogs they'll eat, storing answer in "Hunger"
	let Hunger = readlineSync.question('How many hotdogs will each person eat? ');
//	Define "Demand" as "People" * "Hunger"
	Demand = People * Hunger ;
	console.log("Demand is", Demand);
//	Define HotDogPacks as Demand/8, rounding up
	let HotDogPacks = math.ceil((Demand / 8));
//	Define BunPacks as Demand/10, rounding up 
	let BunPacks = math.ceil((Demand / 10));
//	Tell user "The minimum number of hot dog packages required is "[HotDogPacks]
	console.log("The minimum number of hot dog packages required is ", HotDogPacks);
//	Tell user "The minimum number of hot dog bun packages required is "[BunPacks]
	console.log("The minimum number of hot dog bun packages required is ", BunPacks);
//	Tell user "There will be "[(HotDogPacks * 8) - Demand]" leftover hot dogs."
	console.log("There will be ", (HotDogPacks * 8) - Demand, " leftover hot dogs.");
//	Tell user "There will be "[(BunPacks * 10) - Demand]" leftover hot dog buns."
	console.log("There will be ", (BunPacks * 10) - Demand, " leftover hot dog buns.");
}
main()