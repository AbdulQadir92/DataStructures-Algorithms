

const obj = {
	name: 'abc',
	age: 30,
	'is-married': false,
	designation: function () {
		console.log('Programmer');
	}
};

obj.hobby = 'Learning';
delete obj.hobby;

console.log(obj.name);
console.log(obj['age']);
console.log(obj['is-married']);
obj.designation();
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Big-O
// insert / remove / access - O(1)
// search / .keys / .values / .entries - O(n)