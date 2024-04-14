/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    let res = 0
    let temp = []
    for (let i=0;i<nums.length;i++) {
        if (temp.indexOf(nums[i]) > -1 || nums.lastIndexOf(nums[i]) !== nums.indexOf(nums[i])) {
            temp.push(nums[i])
        } else {
            res += nums[i]
        }
    }
    return res
};