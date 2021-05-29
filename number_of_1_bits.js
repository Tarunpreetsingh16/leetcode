//Link - https://leetcode.com/problems/number-of-1-bits
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let bits = 0;
    //loop till number is not zero
    while(n) {
        bits++;
        //n&n-1 will toggle the least significant 1 bit
        n &= (n-1);
    }
    return bits;
};