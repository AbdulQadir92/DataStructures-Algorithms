/* 
  Factorial
	In mathematics, the factorial of a non-negative integer n, denoted as n!,
	is the product of all positive integers less than or equal to n
*/

/* 
  Problem - Given a number n, find the factorial of that integer
*/


function findFactorial(n) {
	let factorial = 1;
	for (let i = 2; i <= n; i++) {
		factorial *= i;
	}
	return factorial
}

console.log(findFactorial(0));
console.log(findFactorial(1));
console.log(findFactorial(5));

// Big-O = O(n)


function findFactorialRecursive(n) {
	if (n === 0) {
		return 1
	}

	return n * findFactorialRecursive(n - 1)
}

console.log(findFactorialRecursive(0));
console.log(findFactorialRecursive(1));
console.log(findFactorialRecursive(5));

// Big-O = O(n)