const sumAll = function(a,b) {

	let sumTotal = 0;

	if (a < 0 || b < 0)
		return ("ERROR");
	if (typeof(a) != "number" || typeof(b) != "number")
		return ("ERROR");
	if (a < b) {
		for (let i = a; i <= b; i++) {
			sumTotal += i;
		}
	} else if (a > b) {
		for (let i = b; i <= a; i++) {
			sumTotal += i;
		}
	} else {
		return (a);
	}
	
	return (sumTotal);
};

// Do not edit below this line
module.exports = sumAll;
