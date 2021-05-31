//Link https://leetcode.com/problems/fizz-buzz
/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let output = [];
    while(n > 0) {
        if(n%3 === 0 && n%5 === 0) output[n-1] = 'FizzBuzz'
        else if(n%3 === 0) output[n-1] = 'Fizz'
        else if(n%5 === 0) output[n-1] = 'Buzz'
        else output[n-1] = `${n}`
        n--
    }
    return output
};