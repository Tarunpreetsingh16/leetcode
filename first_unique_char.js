//Link https://leetcode.com/problems/first-unique-character-in-a-string/
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let obj = {};
    let output = -1
    //create a map of chars
    s.split('').forEach((key) => {
        obj[key] = key in obj ? obj[key]+1 : 1; 
    })
    //find the first unique character by checking value of the map
    s.split('').some((key, index) => {
        if(obj[key] === 1) {
            output = index;
            return true;
        }
    })
    return output;
};