//This program will test a password (inputted by user) to determine whether it is sufficiently complex.
//There are four rules for complexity. The passowrd must have:

//One (or more) uppercase character 
//One (or more) lowercase character
//One (or more) digit
//One (or more) chatacter from the group [@,#,&%^]
//At least 8 characters.

//If the password is insufficiently complex, the program will tell the user which requirements that they
//failed to meet, or whether they entered a correct password.

//Load Readline
const readlineSync = require('readline-sync');

//testPassword function definition
const testPassword = (password, ruleRegexp, rulesText) =>
{
	let count = 0;
	while (count < ruleRegexp.length)
	{
		if (ruleRegexp[count].test(password) == false)
		{
			console.log(rulesText[count],'\x1b[31mfailed\x1b[0m');
			var correctness = 0
		};
		if (ruleRegexp[count].test(password) == true)
		{
			console.log(rulesText[count],'\x1b[32mpassed\x1b[0m');
			if (correctness != 0)
			{
				let correctness = 1
			}
		};
		count = count + 1
	}
	if (correctness == 0)
	{
		return 0
	}
	else
	{
		return 1
	}
};

//main function definition
const main = () =>
{
	//Create an array consisting of the password strength rules
	let rulesText = ["One or more uppercase letter", "One or more lower case character",
	"One or more number", "One or more from this group @#$%^", "Minimum Length 8 Characters. "];
	//Create an array consisting of the RegExp Objects
	let ruleRegexp = [
	/[A-Z]/, //at least one uppercase 
	/[a-z]/, //at least one lowercase 
	/[0-9]/, //at least one number 
	/[@,#,&%^]/, //At least one of those characters 
	/([\d]|[\D])([\d]|[\D])([\d]|[\D])([\d]|[\D])([\d]|[\D])([\d]|[\D])([\d]|[\D])([\d]|[\D])+/ 
	//At least 8 characters of any sort
	]
	//Display all password requirements to the user.
	console.log("Password strength rules , any order:\n");
	let count = 0
	while (count < rulesText.length)
	{
		console.log(rulesText[count]);
		count = count + 1;
	}
	console.log("");
	
	//Prompt user for password
	let password = readlineSync.question("Enter password: ");
	//Call testPassword 
	let correctness = testPassword(password,ruleRegexp,rulesText);
	if (correctness == 1)
		console.log("\nYour password meets the requirements");
	if (correctness == 0)
		console.log("\nSorry, please review the requirements and try again");
	
};


//Call main 
main()