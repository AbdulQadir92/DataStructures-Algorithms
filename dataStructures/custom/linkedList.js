class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}
	
	isEmpty() {
		return this.size === 0
	}
	
	getSize() {
		return this.size
	}
	
	// O(1)
	prepend(value) {
		const node = new Node(value);
		
		if(this.isEmpty()) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		
		this.size++;
	}
	
	// O(n)
	append(value) {
		const node = new Node(value);
		
		if(this.isEmpty()) {
			this.head = node;
		} else {
			let currentNode = this.head;
			while(currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
		
		this.size++;
	}
	
	// O(n)
	insert(value, index) {
		if(index < 0 || index > this.size) {
			console.log('Invalid index');
			return
		}
		
		if(index === 0) {
			this.prepend(value);
			return
		}
		
		if(index === this.size) {
			this.append(value);
			return
		}
		
		let currentNode = this.head;
		const node = new Node(value);
		for(let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next;
		}
		node.next = currentNode.next;
		currentNode.next = node
		this.size++;
	}
	
	// O(n)
	removeFrom(index) {
		if(index < 0 || index >= this.size || index === undefined) {
			return null
		}

		let removedNode;
		if(index === 0) {
			removedNode = this.head;
			this.head = this.head.next;
		} else {
			let currentNode = this.head;
			for(let i = 0; i < index - 1; i++) {
				currentNode = currentNode.next;
			}
			removedNode = currentNode.next;
			currentNode.next = removedNode.next;
		}
		this.size--;
		return removedNode.value
	}
	
	// O(n)
	removeValue(value) {
		if(this.isEmpty() || value === undefined) {
			return null
		}
		
		let removedNode;
		if(this.head.value === value) {
			removedNode = this.head;
			this.head = this.head.next;
		} else {
			let currentNode = this.head;
			while(currentNode.next) {
				if(currentNode.next.value == value) {
					removedNode = currentNode.next;
					currentNode.next = removedNode.next;
					break;
				}
				currentNode = currentNode.next;
			} 
		}
		this.size--;
		return removedNode ? removedNode.value : null
	}
	
	// O(n)
	search(value) {
		if(this.isEmpty()) {
			return -1
		}
		
		let index = 0;
		let currentNode = this.head;
		while(currentNode) {
			if(currentNode.value === value) {
				return index
			}
			index++;
			currentNode = currentNode.next;
		}
		
		return -1
 	}
	
	// O(n)
	reverse() {
		if(this.isEmpty()) {
			console.log('List is empty');
			return
		}
		
		let prev = null;
		let curr = this.head;
		while(curr) {
			let next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		this.head = prev;
	}
	
	// O(n)
	print() {
		if(this.isEmpty()) {
			console.log('List is empty');
		} else {
			let currentNode = this.head;
			while(currentNode) {
				console.log(currentNode.value);
				currentNode = currentNode.next;
			}
		}
	}
}

// Linked List with tail
class TailedLinkedList extends LinkedList {
	constructor() {
		super()
		this.tail = null
	}
	
	// O(1)
	prepend(value) {
		const node = new Node(value);
		if(this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}
	
	// O(1)
	append(value) {
		const node = new Node(value);
		if(this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}
	
	// O(1)
	removeFromFront() {
		if(this.isEmpty()) {
			return null
		}
		const removedNode = this.head;
		this.head = this.head.next;
		this.size--;
		return removedNode.value
	}
	
	// O(n)
	removeFromEnd() {
		if(this.isEmpty()) {
			return null
		}
		const removedNode = this.tail;
		if(this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let currentNode = this.head;
			while(currentNode.next !== this.tail) {
				currentNode = currentNode.next;
			}
			currentNode.next = null;
			this.tail = currentNode;
		}
		this.size--;
		return removedNode.value
	}
}

const list = new TailedLinkedList();

/*
list.prepend(30);
list.prepend(20);

list.prepend(10);

list.append(40);
list.append(50);

list.insert(100, 5);
list.insert(200,  6)

console.log(list.removeFromFront());
console.log(list.removeFromFront());

console.log(list.removeFromEnd());
console.log(list.removeFromEnd());

console.log('');
list.print(); 
list.reverse();
console.log('');
list.print();
console.log('');
console.log(list.getSize());
*/

// Stack with Linked List
class Stack {
	constructor() {
		this.list = new TailedLinkedList()
	}
	
	push(value) {
		this.list.append(value)
	}
	
	pop() {
		return this.list.removeFromEnd()
	}
	
	peek() {
		return this.list.tail ? this.list.tail.value : null
	}
	
	isEmpty() {
		return this.list.isEmpty()
	}
	
	getSize() {
		return this.list.getSize()
	}
	
	print() {
		this.list.print()
	}
}

const stack = new Stack();

/*
console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.getSize());
console.log(stack.pop());
console.log(stack.peek());

console.log('');
stack.print();
*/


// Queue with Linked List
class Queue {
	constructor() {
		this.list = new TailedLinkedList()
	}
	
	enqueue(value) {
		this.list.append(value)
	}
	
	dequeue() {
		return this.list.removeFromFront();
	}
	
	peek() {
		return this.list.head ? this.list.head.value : null
	}
	
	isEmpty() {
		return this.list.isEmpty()
	}
	
	getSize() {
		return this.list.getSize()
	}
	
	print() {
		this.list.print()
	}
}

const queue = new Queue();

/*
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue());

console.log(queue.peek());
console.log('');

queue.print();
*/