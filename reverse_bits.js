//Link https://leetcode.com/problems/reverse-bits/
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    var result = 0;
    var count = 32;
    while (count--) {
        //shift the result by 1 bit to the left 
        result <<= 1;
        //get the last bit of n by n&1 and then add it to the result 
        result += n & 1;
        //shift the number by 1 bit to the right to get the least significant bit in next iteration
        n = n >> 1;
    }
    //to get rid of the sign bit shift the result to right by 1 (>>> shifts bits without retaining sign information)
    return result >>> 0;
};

console.log(reverseBits(5));