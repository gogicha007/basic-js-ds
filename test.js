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
    if (!this.root()) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.root(), newNode);
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
    return this.getMax(this.root());
  }

  getMax(node) {
    if (!node.right) {
      return node.data;
    } else {
      return this.getMax(node.right);
    }
  }

  min() {
    return this.getMin(this.root());
  }

  getMin(node) {
    if (!node.left) {
      return node.data;
    } else {
      return this.getMin(node.left);
    }
  }
}

const bst = new BinarySearchTree();
bst.add(30);
bst.add(40);
bst.add(15);
bst.add(18);
bst.add(38);

console.log(bst.max());

// module.exports = {
//   BinarySearchTree,
// };
