// Queue follows the principle of FIFO which means element that is added first to the queue is removed first.

/*
class Queue {
	constructor() {
		this.items = []
	}
	
	enqueue(element) {
		this.items.push(element);
	}
	
	dequeue() {
		return this.items.shift()
	}
	
	isEmpty() {
		return this.items.length === 0
	}
	
	peek() {
		if(!this.isEmpty()) {
			return this.items[0]
		}
		return null
	}
	
	size() {
		return this.items.length
	}
	
	print() {
		console.log(this.items);
	}
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.size())
queue.print();
*/

// Optimized implementation of Queue
class Queue {
	constructor() {
		this.items = {}
		this.rear = 0
		this.front = 0
	}

	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return
		}

		const temp = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return temp
	}

	isEmpty() {
		return this.rear - this.front === 0
	}

	peek() {
		if (!this.isEmpty()) {
			return this.items[this.front]
		}
		return null
	}

	size() {
		return this.rear - this.front
	}

	print() {
		console.log('Items:');
		for (const item of Object.values(this.items)) {
			console.log(item);
		}
	}
}

const queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
queue.enqueue(40);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
queue.print();
