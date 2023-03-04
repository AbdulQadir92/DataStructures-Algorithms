
function climbingStaircase(num) {
	const noOfWays = [1, 2];
	
	for(let i = 2; i <= num; i++) {
		noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
	}
	
	return noOfWays[num - 1]
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

// Big-O = O(n)