/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function(nums, changeIndices) {
    const arr = new Array(nums.length).map((_, i) => i + 1)
    if (arr.some(v => !changeIndices.includes(v))) return -1

};