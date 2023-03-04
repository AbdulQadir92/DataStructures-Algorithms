
function towerOfHanoi(num, fromRod, toRod, usingRod) {
	if(num === 1) {
		console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
		return
	}
	towerOfHanoi(num-1, fromRod, usingRod, toRod);
	console.log(`Move disk ${num} from ${fromRod} to ${toRod}`);
	towerOfHanoi(num-1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, 'A', 'C', 'B');

// Big-O = O(2^n)