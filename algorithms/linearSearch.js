
function linearSearch(arr, value) {
	let len = arr.length;
	
	for(let i = 0; i < len; i++) {
		if(arr[i] === value) {
			return i
		}
	}
	
	return -1
}

const arr = [-5, 2, 10, 4, 6];

console.log(linearSearch(arr, -5))
console.log(linearSearch(arr, 6))
console.log(linearSearch(arr, 20))

// Big-O = O(n)