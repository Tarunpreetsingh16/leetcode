//Link https://leetcode.com/problems/binary-tree-inorder-traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {numbers[]}
 */
var inorderTraversal = function(root) {
    let numbers = [];
    return traverse(root, numbers);
};
const traverse = (root, numbers) => {
    //check it node is not null
    if(root) {
        //traverse left subtree
        traverse(root.left, numbers);
        numbers.push(root.val);
        //traverse the right subtree
        traverse(root.right, numbers);
    }
    return numbers;
}