//This program will create and manipulate a number of objects. 

//First, the object class "names", which will have elements "first" "last" and "age"
class names {
constructor(first, last, age) {
	this.first = first;
	this.last = last;
	this.age = age;
	}
}


//Second, create a function named "printObject" which will accept three inputs ("allNames" "sortType" and
//"message"), then will sort the array of objects (allNames) using the sortType as the key to how the
//array objects should be sorted.
const printObject = (allNames, sortType, message) =>
{
	//Message Printer
	console.log(message)
	
	//Object Sorters
	
	if (sortType == "age")
	{
		allNames.sort(compare = (a, b) => {
			if (a.age < b.age)
				return -1
			if (a.age > b.age)
				return 1
		});
		
	}
	if (sortType == "first")
	{
		allNames.sort(compare = (a, b) => {
			if (a.first > b.first)
				return 1;
			if (a.first < b.first) 
				return -1;
		});
	}
	if (sortType == "last")
	{
		allNames.sort(compare = (a, b) => {
			if (a.last > b.last)
				return 1;
			if (a.last < b.last) 
				return -1;
		});		
	}
	if (sortType == "none")
		allNames.sort();
	
	//Object Printer
	objectCount = allNames.length
	counter = objectCount
	while (counter > 0)
	{
		console.log(allNames[objectCount - counter].first,
		allNames[objectCount - counter].last,
		allNames[objectCount - counter].age);
		counter = counter - 1
	}
	console.log()
}

const main = () =>
{
	//Create the empty array using the identifier "allNames"
	allNames = []
	//Using the push() method, load 4 new objects of names to the array allNames, 
	//populating the fields first , last , age ( data is of your choosing, for example: 
	//allNames.push( new names("Cammo", "Hammer", 39));
	allNames.push(new names("Josh", "Joffries", 28));
	allNames.push(new names("John", "Jeffries", 21));
	allNames.push(new names("Jeff", "Johnfries", 35));
	allNames.push(new names("Joef", "Juffries",42));
	
	//Call printObject, passing the array , sort method as a string ( options are first, last, age, none )
	printObject(allNames, "none", "Objects by Index:");
	printObject(allNames, "first", "Objects by First Name:");
	printObject(allNames, "last", "Objects by Last Name:");
	printObject(allNames, "age", "Objects by Age:");
}
main()