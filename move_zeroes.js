//Link https://leetcode.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let left = 0, right = 1;
    while(right < nums.length) {
        if(nums[left] === 0) {
            if(nums[right] != 0) {
                const temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
            }
        } else {
            left++;
        }
        right++;
    }
};