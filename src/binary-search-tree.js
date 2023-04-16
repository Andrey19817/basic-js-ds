const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootMain = null;
  }

  root() {
    return this.rootMain;
  }

  add( data,nodeMain = this.rootMain ) {
    if (this.rootMain === null) {
      this.rootMain = new Node(data);
    }
    else if (nodeMain.data > data) {
      nodeMain.left === null ?
      nodeMain.left = new Node(data) :
        this.add(data, nodeMain.left);
    }
    else if (nodeMain.data < data) {
      nodeMain.right === null ?
      nodeMain.right = new Node(data) :
        this.add(data, nodeMain.right);
    }
    return this;
  }

  has(data,nodeMain = this.rootMain) {
    if (this.rootMain === null) {
      return false;
    }
    else if (nodeMain.data === data) {
      return true;
    }
    else if (nodeMain.data > data && nodeMain.left) {
      return this.has(data, nodeMain.left);
    }
    else if (nodeMain.data < data && nodeMain.right) {
      return this.has(data, nodeMain.right);
    }
    else {
      return false;
    }
  }

  find(data, nodeMain = this.rootMain) {
    if (this.rootMain === null) {
      return null;
    }
    else if (nodeMain.data === data) {
      return nodeMain;
    }
    else if (nodeMain.data > data && nodeMain.left) {
      return this.find(data, nodeMain.left);
    }
    else if (nodeMain.data < data && nodeMain.right) {
      return this.find(data, nodeMain.right);
    }
    else {
      return null;
    }
  }


  remove(data) {
    this.rootMain = removeData(this.rootMain, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      }
      else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);

        return node;
      }
    }
  }


  min() {
    if (!this.rootMain) {
      return null;
    }

    let node = this.rootMain;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootMain){
      return null;
    } 

    let node = this.rootMain;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};