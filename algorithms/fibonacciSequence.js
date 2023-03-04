/* 
  Fibonacci Sequence
	In mathematics, the Fibonacci Sequence is a sequence in which
	each number is the sum of two preceding numbers
*/

/* 
  Problem - Given a number n, find the first n elements of the Fibonacci Sequence
*/


function fibonacciSequence(n) {
	const fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib
}

console.log(fibonacciSequence(0));
console.log(fibonacciSequence(1));
console.log(fibonacciSequence(6));

// Big-O = O(n)


// Recursive
function fibonacciSequenceRecursive(n) {
	if (n < 2) {
		return n
	}

	return fibonacciSequenceRecursive(n - 1) + fibonacciSequenceRecursive(n - 2)
}

console.log(fibonacciSequenceRecursive(0)); // 0
console.log(fibonacciSequenceRecursive(1)); // 1
console.log(fibonacciSequenceRecursive(6)); // 8

// Big-O = O(2^n)