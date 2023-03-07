const palindromes = function (string) {
	let length;
	let front;
	let reverse;

	string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	string = string.replace(/\s/g, '');
	string = string.toLowerCase();
	length = string.length;
	front = "";
	reverse = "";
	for (let i = 0; i <= Math.floor(length/2); i++)
	{
		front = front.concat("", string[i]);
		reverse = reverse.concat("", string[(length - 1) - i]);
	}
	return (front === reverse);
};

// Do not edit below this line
module.exports = palindromes;
