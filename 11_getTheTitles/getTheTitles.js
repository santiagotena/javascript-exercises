const getTheTitles = function(array) {
	let output;

	output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(array[i].title);
	}
	return (output);
};

const books = [
{
	title: 'Book',
	author: 'Name'
},
{
	title: 'Book2',
	author: 'Name2'
}
]

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
