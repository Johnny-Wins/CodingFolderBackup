//This program will generate bayesian updates based on user input. 
//Bayes formula is P(A|B) = P(B|A)*P(A) 
//                          -----------
//                             P(B)
//Or, in layman's terms, "[The probability of A (given B is true)] is equal to {[the probability of B (given 
//A is true)] times [the probability of A]} divided by [The probability of B]"

//When using this to update on evidence, consider B to be the hypothesis and A to be the evidence.
//So, for example, if you have a theory that "Given [I am wearing a mask], my [chance of catching covid at 
//the barbershop] is [200 in 100,000,000]", and you then have some evidence you'd like to incorporate (namely 
//"I went into a barbershop with a mask and didn't catch Covid) then you would represent that as:

//P(The probability of "How likely I am to catch COVID from the barbershop, given that I just went and 
//didn't catch it.") 

//= P(The probability of "How likely I was to catch the disease, given that my prior hypothesis is true")

// * P(The prior probability of the experimental result (not catching the disease)) 

// / P(The prior probability of me catching COVID if there hadn't been an experimental result (i.e. the base 
// likelihood of the occurance)

//Or in numerical terms: 

//P(A|B) =                (P(1/5,000,000) * P(4,999,999/5,000,000)
//         -----------------------------------------------------------------------
//          P(22,697(the cases in my area)/974,997(The population of that area)

//Which reduces to:
//P(A|B) =       0.000,000,199,999,96
//       ---------------------------------
//                     0.023279

//Leaving P(A|B) = 0.000,000,8591432 , which, while very complicated looking, must be compared to the
//prior probability of 0.0000002 has actually only changed a tiny, tiny, tiny amount. But if instead I had 
//Observed the opposite evidence, a 1/5,000,000 chance, then things would've instead been:

//P(A|B) =                (P(1/5,000,000) * P(1/5,000,000)
//         -----------------------------------------------------------------------
//										0.023279

//P(A|B) =            		0.000,000,000,000,17182
//										0.023279
//         -----------------------------------------------------------------------

//Reducing to P(A|B) = 0.000,000,000,000,73809 . Which, again, looks kinda similar, but is actually an orders 
//of magnitude difference

//Load Readline
const readlineSync = require('readline-sync');

//Bayesian Estimation Calculator
const Estimate = (BaseRate, PriorEstimate,PriorProbability) =>
{
	Probability = (PriorEstimate*PriorProbability)/BaseRate;
	return Probability;
};

//Start main 
const main = () =>
//Request User Inputs
{
	let DependantVariable = readlineSync.question("What is the 'b' in 'B, given A'?");
	let IndependantVariable = readlineSync.question("What is the 'a' in 'b, given a'?");
	let BaseRate = readlineSync.question("Considering occurence in the entire population, how common is the thing you're testing for?");
	let PriorEstimate = readlineSync.question("What would you guess the rate of the thing you're testing for to be? (its prior probability)");
	let PriorProbability = readlineSync.question("Under your previous estimates, how likely was the thing you've just observed?");
	console.log("The chance of observing",IndependantVariable,"given that",DependantVariable,"is",Estimate(BaseRate,PriorEstimate,PriorProbability),"based on the new evidence.");
	
};

main()