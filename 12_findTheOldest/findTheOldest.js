const findTheOldest = function(people) {
	let index;
	let lifespan;
	let temp;
	let date;
	let yearOfDeath;

	index = 0;
	lifespan = 0;
	for (let i = 0; i < people.length; i++) {

		if (!people[i].yearOfDeath) {
			date = new Date();
			yearOfDeath = date.getFullYear();
		}
		else
			yearOfDeath = people[i].yearOfDeath;
		temp = yearOfDeath - people[i].yearOfBirth;
		if (temp > lifespan) {
			lifespan = temp;
			index = i;
		}
	}
	return (people[index]);
};

// Do not edit below this line
module.exports = findTheOldest;

// // Debugging
// // http://localhost:5500/top/forked_repos/javascript-exercises/12_findTheOldest/
// const people = [
// 	{
// 		name: "Carly",
// 		yearOfBirth: 1066,
// 	},
// 	{
// 		name: "Ray",
// 		yearOfBirth: 1962,
// 		yearOfDeath: 2011,
// 	},
// 	{
// 		name: "Jane",
// 		yearOfBirth: 1912,
// 		yearOfDeath: 1941,
// 	},
// ]

// findTheOldest(people);
