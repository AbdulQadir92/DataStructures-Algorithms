// Binary Search works only on sorted array

function binarySearch(arr, value) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		let midIndex = Math.floor((leftIndex + rightIndex) / 2);
		let midElement = arr[midIndex];

		if (value === midElement) {
			return midIndex
		}

		if (value < midElement) {
			rightIndex = midIndex - 1
		} else {
			leftIndex = midIndex + 1
		}
	}

	return -1
}

const arr = [-5, 2, 4, 6, 10];

console.log(binarySearch(arr, 10))
console.log(binarySearch(arr, 6))
console.log(binarySearch(arr, 20))

// Big-O = O(logn)


// Recursive
function binarySearchRecursive(arr, value) {
	return search(arr, value, 0, arr.length - 1);
}

function search(arr, value, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) {
		return -1
	}

	let midIndex = Math.floor((leftIndex + rightIndex) / 2);
	let midElement = arr[midIndex];

	if (value === midElement) {
		return midIndex
	}

	if (value < midElement) {
		return search(arr, value, leftIndex, midIndex - 1);
	} else {
		return search(arr, value, midIndex + 1, rightIndex);
	}
}

console.log(binarySearchRecursive(arr, 10))
console.log(binarySearchRecursive(arr, 6))
console.log(binarySearchRecursive(arr, 20))

// Big-O = O(logn)