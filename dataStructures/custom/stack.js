// Stack follows the principle of LIFO which means element that is added in last to the stack is removed first.

class Stack {
	constructor() {
		this.items = []
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	print() {
		console.log(this.items);
	}
}

const stack = new Stack();


console.log(stack.pop());
console.log(stack.peek());
console.log(stack.size());
stack.print();
console.log(stack.isEmpty());