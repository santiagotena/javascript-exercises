const fibonacci = function(a) {
	let array;
	let temp;

	if (a < 1)
		return ("OOPS");
	array = [1, 1];
	if (a === 1 || a === 2)
		return (1);
	for (let i = 2; i < a; i++) {
		temp = array[i - 1] + array[i - 2];
		array.push(temp);
	}
	return (array[a - 1]);
};

// Do not edit below this line
module.exports = fibonacci;

// // Debugging
// http://localhost:5500/top/forked_repos/javascript-exercises/10_fibonacci/
// fibonacci(4);