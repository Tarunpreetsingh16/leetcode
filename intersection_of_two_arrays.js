//Link https://leetcode.com/problems/intersection-of-two-arrays-ii/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    const map = createMap(nums1.length <= nums2.length ? nums1 : nums2);
    return findIntersection(map, nums1.length > nums2.length ? nums1 : nums2 )
};
const createMap = (array) => {
    const obj = {};
    array.forEach((val) => {
        obj[val] = val in obj ? obj[val] + 1 : 1; 
    })
    return obj;
}
const findIntersection = (map, array) => {
    return array.filter((val) => {
        return val in map && map[val] !== 0 && map[val]--
    })
}