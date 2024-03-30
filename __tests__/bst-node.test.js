import BSTNode from '../src/bst-node.js';
import BST from '../src/bst.js';

describe('bstNode', () => {

  test('should correctly create a node', () => {
    const node = new BSTNode(36);
    expect(node.data).toEqual(36);
    expect(node.left).toEqual(null);
    expect(node.right).toEqual(null);
  });
});

describe('binarySearchTree', () => {

    test('should initialize a binary search tree with a root of null', () => {
      let bst = new BST();
      expect(bst.root).toEqual(null);
    });

    test('Should create a new root node', () => {
        let bst = new BST();
        let node = new BSTNode(36);
        bst.insertNode(node);
        expect(bst.root).toEqual(node);
    });

    test('it should add a child node to the left of the root node', () => {
        let bst = new BST();
        let rootNode = new BSTNode(36);
        bst.insertNode(rootNode);
        let newNode = new BSTNode(22);
        bst.insertNode(newNode);
        expect(rootNode.left.data).toEqual(22);
    });

    test('it should add a child node to the right of the root node', () => {
        let bst = new BST();
        let rootNode = new BSTNode(36);
        bst.insertNode(rootNode);
        let newNode = new BSTNode(48);
        bst.insertNode(newNode);
        expect(rootNode.right.data).toEqual(48);
    });

    test('it should add a child to the left of a child node', () => {
        let bst = new BST();
        let rootNode = new BSTNode(36);
        bst.insertNode(rootNode);
        let node2 = new BSTNode(22);
        bst.insertNode(node2);
        let node3 = new BSTNode(11);
        bst.insertNode(node3);
        expect(rootNode.left.left.data).toEqual(11);
    });

    test('it should add a child to the right of a child node', () => {
        let bst = new BST();
        let rootNode = new BSTNode(36);
        bst.insertNode(rootNode);
        let node2 = new BSTNode(48);
        bst.insertNode(node2);
        let node3 = new BSTNode(73);
        bst.insertNode(node3);
        expect(rootNode.right.right.data).toEqual(73);
    });

    test('it should add a child to left or right of a node', () => {
        let bst = new BST();
        let rootNode = new BSTNode(36);
        bst.insertNode(rootNode);
        let node2 = new BSTNode(22);
        bst.insertNode(node2);
        let node3 = new BSTNode(33);
        bst.insertNode(node3);
        expect(rootNode.left.right.data).toEqual(33);
    });

    test('it should not add duplicate nodes', () => {
        let bst = new BST();
        let rootNode = new BSTNode(36);
        bst.insertNode(rootNode);
        let node2 = new BSTNode(36);
        expect(bst.insertNode(node2)).toEqual({"root": {"data": 36, "left": null, "right": null}});
    });

    const pbst = new BST();
    beforeEach(() => {
        pbst.insertNode(new BSTNode(4));
        pbst.insertNode(new BSTNode(2));
        pbst.insertNode(new BSTNode(6));
        pbst.insertNode(new BSTNode(1));
        pbst.insertNode(new BSTNode(3));
        pbst.insertNode(new BSTNode(5));
        pbst.insertNode(new BSTNode(7));  
    });


    test('it should return true if the tree includes 5', () => {
        expect(pbst.search(5)).toEqual(true);
    });


});