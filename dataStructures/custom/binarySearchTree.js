
class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	isEmpty() {
		return this.root === null
	}

	insert(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(root, newNode) {
		if (newNode.value < root.value) {
			if (root.left === null) {
				root.left = newNode;
			} else {
				this.insertNode(root.left, newNode);
			}
		} else {
			if (root.right === null) {
				root.right = newNode
			} else {
				this.insertNode(root.right, newNode);
			}
		}
	}

	search(root, value) {
		if (!root) {
			return false
		}

		if (root.value === value) {
			return true
		} else if (value < root.value) {
			return this.search(root.left, value);
		} else {
			return this.search(root.right, value);
		}
	}

	// Depth First Search (DFS)
	preOrderTraversal(root) {
		if (root) {
			console.log(root.value);
			this.preOrderTraversal(root.left);
			this.preOrderTraversal(root.right);
		}
	}

	inOrderTraversal(root) {
		if (root) {
			this.inOrderTraversal(root.left);
			console.log(root.value);
			this.inOrderTraversal(root.right);
		}
	}

	postOrderTraversal(root) {
		if (root) {
			this.postOrderTraversal(root.left);
			this.postOrderTraversal(root.right);
			console.log(root.value);
		}
	}

	// Breadth First Search (BFS)
	levelOrder() {
		// Use the optimized Queue in real
		const queue = [];
		queue.push(this.root);
		while (queue.length) {
			let currentNode = queue.shift();
			console.log(currentNode.value);

			if (currentNode.left) {
				queue.push(currentNode.left);
			}

			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
	}

	findMin() {
		let currentNode = this.root;
		while (currentNode.left) {
			currentNode = currentNode.left;
		}
		return currentNode.value
	}

	findMinRecursive(root) {
		if (!root.left) {
			return root.value
		} else {
			return this.findMinRecursive(root.left);
		}
	}

	findMax() {
		let currentNode = this.root;
		while (currentNode.right) {
			currentNode = currentNode.right
		}
		return currentNode.value
	}

	findMaxRecursive(root) {
		if (!root.right) {
			return root.value
		} else {
			return this.findMaxRecursive(root.right)
		}
	}

	delete(value) {
		this.root = this.deleteNode(this.root, value);
	}

	deleteNode(root, value) {
		if (root === null) {
			return root
		}

		if (value < root.value) {
			root.left = this.deleteNode(root.left, value);
		} else if (value > root.value) {
			root.right = this.deleteNode(root.right, value);
		} else {
			if (!root.left && !root.right) {
				return null
			}

			if (!root.left) {
				return root.right
			} else if (!root.right) {
				return root.left
			}

			root.value = this.findMin(root.right);
			root.right = this.deleteNode(root.right, root.value);
		}

		return root
	}
}


const bst = new BinarySearchTree();

console.log('Tree is empty:', bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(20);

/*
for(let i = 100; i > 0; i--) {
	bst.insert(Math.floor(Math.random() * 1000));
}
*/

console.log(bst.search(bst.root, 10));
console.log('');
// bst.preOrderTraversal(bst.root);
// bst.inOrderTraversal(bst.root);
// bst.postOrderTraversal(bst.root);

// bst.levelOrder();

/*
console.log(bst.findMin());
console.log(bst.findMinRecursive(bst.root));
console.log(bst.findMax());
console.log(bst.findMaxRecursive(bst.root));
*/

bst.levelOrder();
console.log('');
bst.delete(20);
bst.levelOrder();
