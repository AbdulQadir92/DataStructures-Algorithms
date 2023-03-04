

function quickSort(arr) {
	if(arr.length < 2) {
		return arr
	}
	
	let pivot = arr[arr.length - 1];
	let leftArr = [];
	let rightArr = [];
	
	const len = arr.length;
	for(let i = 0; i < len - 1; i++) {
		if(arr[i] < pivot) {
			leftArr.push(arr[i]);
		} else {
			rightArr.push(arr[i]);
		}
	}
	
	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));

// Worst case = O(n^2)
// Average case = O(nlogn)