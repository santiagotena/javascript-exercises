const repeatString = function(string, n) {
	let nString = "";
	
	if (n < 0)
		return "ERROR"
	if (n == 0)
		return "";
	for (let i = 0; i < n; i++) {
		nString = nString + string;
	}
	return nString;
};

// Do not edit below this line
module.exports = repeatString;
