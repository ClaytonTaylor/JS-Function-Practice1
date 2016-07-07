// #1

/*
function tripleFive(Fives) {
	for(var i = 0; i < 3; i++ ) 
		console.log("Five!");
}
tripleFive();
*/

// #2

/*

function lastLetter(String) {
	console.log(String.substr(String.length-1));
}

lastLetter("Bacon");

*/

// #3


/*

function square(number) {
	return 3 * number;
}

square(7)

*/

// #4

/*

function negate(number) {
	return number * -1;
}

negate(7)

*/

// #5 

/*

function toArray(par1, par2, par3) {
	var newArray = [ par1, par2, par3 ]
	return newArray
}
toArray(1, 4, 5);

*/

// #6

/*

function startWithA(String) {
	if (String.charAt(0) === "a") {
		return true;
	}
	else {
		return false;
	}
}

startWithA("apple");

*/

// #7

/*

function excite(String) {
	return console.log(String + "!!!")
}

excite("Go")

*/

// #8

/*

function sun(string) {
	if (string.indexOf("sun")) {
		return true;
	}
	else {
		return false;
	}
}

sun("berryflowersun");

*/

// #9

/*

function tiny(number) {
	if (number < 1 && number > 0) {
		return true;
	}
	else {
		return false;
	}
}
tiny(.5);

*/

// # 10

/*

function getSeconds(time) {
	var timeArray = time.split(":")
	var mins = parseInt(timeArray[0]) * 60
	var sec = parseInt(timeArray[1])
	var total = mins + sec
	return total
	
}

var example1 = getSeconds("1:30")
var example2 = getSeconds("10:25")
console.log("Example 1: ",example1)
console.log("Example 2: ",example2)

*/