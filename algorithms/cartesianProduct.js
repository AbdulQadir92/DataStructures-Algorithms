
function cartesianProduct(set1, set2) {
	const len1 = set1.length;
	const len2 = set2.length;
	const result = [];
	
	for(let i = 0; i < len1; i++) {
		for(let j = 0; j < len2; j++) {
			result.push([set1[i], set2[j]]);
		}
	}
	
	return result
}

const arr1 = [1, 2]; // n
const arr2 = [3, 4, 5]; // m

console.log(cartesianProduct(arr1, arr2));

// Big-O = O(mn)