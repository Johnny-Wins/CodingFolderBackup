//Create five literals, respectively named and set to: ["item1", $9.99], 
//["item2", $5.99], ["item3", $0.99], ["item4", $59.50], and ["item5", 
//$0.25]. Calculate and display the sum of all these values (stored in "Sum"),
//the 7 percent sales tax (stored in "Tax"), and the overall total (stored in
//"Total".

//Create literals
let item1 = 9.99, item2 = 5.99, item3 = 0.99, item4 = 59.50, item5 = 0.25;
//Sum literals
let Sum = item1 + item2 + item3 + item4 + item5;
//Calculate sales tax
let Tax = (Sum * 0.07)
//Calculate Total cost to be paid by the Customer
let Total = Sum + Tax
//Display info to user
console.log("Item total: $"+Sum.toFixed(2)+"\nSales tax: $"+Tax.toFixed(2)+"\nOverall Total: $"+Total.toFixed(2))