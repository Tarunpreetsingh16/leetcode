// Link  https://leetcode.com/problems/missing-number
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    return ((nums.length*(nums.length + 1))/2) - nums.reduce((acc, curr) => acc + curr)
};