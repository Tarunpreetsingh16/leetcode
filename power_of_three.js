//Link https://leetcode.com/problems/power-of-three
/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    //find the max number that is power of 3 within integer range 
    const maxNumber = Math.pow(3, Math.floor((Math.log(Math.pow(2,32)/2 -1)/Math.log(3)))); 
    //as 3 is prime we can check if maxNumber is divisible by n
    return n>0 && maxNumber%n === 0
};