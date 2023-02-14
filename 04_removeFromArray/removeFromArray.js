const removeFromArray = function(array, ...args) {
	let argsSize;
	let arraySize;

	arraySize = array.length;
	argsSize = args.length;
	for (let i = 0; i < argsSize; i++) {
		for (let j = 0; j < arraySize; j++) {
			if (array[j] === args[i]) {
				array.splice(j, 1);
			}
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
