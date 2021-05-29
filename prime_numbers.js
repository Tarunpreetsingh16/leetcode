//Link - https://leetcode.com/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    if(n < 2) return 0;
    
    let numbers = [];
    for(let  i = 2; i < Math.sqrt(n); i++) {
        if(numbers[i]) continue;
        for(let  j = i*i; j < n; j +=i) {
            numbers[j] = true;
        }
    }
    //subtracting 2 from n because we do not want to consider 0 and 1 
    return n - 2 - numbers.filter((val) => val === true).length
};