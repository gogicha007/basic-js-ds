// const { Node } = require('../extensions/list-tree.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(parent, newNode) {
    if (newNode.data < parent.data) {
      if (parent.left === null) {
        parent.left = newNode;
      } else {
        this.insertNode(parent.left, newNode);
      }
    } else {
      if (parent.right === null) {
        parent.right = newNode;
      } else {
        this.insertNode(parent.right, newNode);
      }
    }
  }

  has(data) {
    return !!this.search(this.root(), data);
  }

  find(data) {
    return this.search(this.root(), data);
  }

  search(parent, data) {
    if (!parent) {
      return parent;
    } else {
      if (parent.data === data) {
        return parent;
      } else if (data < parent.data) {
        return this.search(parent.left, data);
      } else {
        return this.search(parent.right, data);
      }
    }
  }

  max() {
    return this.getMax(this.rootNode);
  }

  getMax(node) {
    if (!node.right) {
      return node.data;
    } else {
      return this.getMax(node.right);
    }
  }

  min() {
    return this.getMin(this.rootNode);
  }

  getMin(node) {
    if (!node.left) {
      return node.data;
    } else {
      return this.getMin(node.left);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(root, data) {
    if (root === null) {
      return root;
    }
    if (data < root.data) {
      root.left = this.removeNode(root.left, data);
    } else if (data > root.data) {
      root.right = this.removeNode(root.right, data);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.data = this.getMin(root.right);
      root.right = this.removeNode(root.right, root.data);
    }
    return root;
  }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
// console.log(tree)
tree.remove(14);
tree.remove(9);
tree.remove(8);

console.log(tree.has(14));
// console.log(tree)
console.log(tree.has(8));
console.log(tree.has(9));
// console.log(tree.has(2));
// console.log(tree.has(6));
// console.log(tree.has(128));
// console.log(tree.has(31));
// console.log(tree.has(54));
// console.log(tree.has(1))
// console.log(tree)

// module.exports = {
//   BinarySearchTree,
// };
