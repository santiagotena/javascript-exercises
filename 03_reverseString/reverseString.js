const reverseString = function(string) {
	let splitString;
	let revSplitString;
	let length;
	
	splitString = string.split("");
	revSplitString = [];
	length = splitString.length
	for (let i = 0; i < length; i++) {
		revSplitString[(length - 1) - i] = splitString[i]; 
	}
	return (revSplitString.join(''));
};

// Do not edit below this line
module.exports = reverseString;
