const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(value) {
    this.rootNode = null
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
    return !!this.search(this.rootNode, data);
  }

  find(data) {
    return this.search(this.rootNode, data);
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

module.exports = {
  BinarySearchTree
};