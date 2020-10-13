'use strict';

const { BinaryTree, BinarySearchTree, Node } = require('../tree');

/*
Can successfully instantiate an empty tree
Can successfully instantiate a tree with a single root node
Can successfully add a left child and right child to a single root node
Can successfully return a collection from a preOrder traversal
Can successfully return a collection from an inOrder traversal
Can successfully return a collection from a postOrder traversal
*/

describe('Binary tree tests', () => {

  it('can instantiate an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeDefined();
  })

  it('Can successfully instantiate a tree with a single root node', () => {
    const tree = new BinarySearchTree('HELLO');
    expect(tree.root).toBe('HELLO');
  })

  it('Can successfully add a left child and right child to a single root node', () => {
    const apples = new Node('apples', 'bananas', 'pears');
    const tree = new BinarySearchTree(apples);
    expect(apples.value).toBe('apples');
    expect(apples.left).toBe('bananas');
    expect(apples.right).toBe('pears');
  })

  it('Can successfully return a collection from a preOrder traversal', () => {
    //const apples = new Node('apples', 'bananas', 'pears');
    const banana = new Node('banana');
    const pear = new Node('pear');
    const apples = new Node('apples', banana, pear);
    const tree = new BinarySearchTree(apples);

    expect(tree.preOrder()).toEqual(['apples','banana','pear']);
  })

  it('Can successfully return a collection from an inOrder traversal', () => {
    //const apples = new Node('apples', 'bananas', 'pears');
    const banana = new Node('banana');
    const pear = new Node('pear');
    const apples = new Node('apples', banana, pear);
    const tree = new BinarySearchTree(apples);

    expect(tree.inOrder()).toEqual(['banana', 'apples', 'pear']);
  })

  it('Can successfully return a collection from a postOrder traversal', () => {
    //const apples = new Node('apples', 'bananas', 'pears');
    const banana = new Node('banana');
    const pear = new Node('pear');
    const apples = new Node('apples', banana, pear);
    const tree = new BinarySearchTree(apples);

    expect(tree.postOrder()).toEqual(['banana', 'pear', 'apples'])
  });

});

describe('MAximum value finder', () => {
  it('Can successfully find the highest value on a tree', () => {
    let twenty = new Node(20);
    let twelve = new Node(12);
    let six = new Node(6);
    let seventeen = new Node(17);
    let thirtytwo = new Node(32);
    let twentyfive = new Node(25);
    let fourty = new Node(40);
    let seventy = new Node(70);

    twenty.left = twelve;
    twenty.right = thirtytwo;
    twelve.left = six;
    twelve.right = seventeen;
    thirtytwo.right = fourty;
    thirtytwo.left = twentyfive;
    fourty.right = seventy;

    let tree = new BinaryTree(twenty);
    expect(tree.findMaxValue()).toEqual(70);
  })

})

