/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b)
    let res = []
    let len = nums.length
    for (let i=0;i<len-2;i++) {
        let k=len-1
        for (let j=i+1;j<k;j++) {
            if(nums[i]+nums[j]+nums[k] === target) {
                return nums[i]+nums[j]+nums[k]
            } else if (nums[i]+nums[j]+nums[k] < target) {
                // console.log(i,j,k,nums[i]+nums[j]+nums[k])
                res.push(nums[i]+nums[j]+nums[k])
            } else {
                
                while(nums[i]+nums[j]+nums[k] > target && k>j) {
                    k--
                }
                if (nums[k+1] !== undefined) {
                    res.push(nums[i]+nums[j]+nums[k+1])
                    // console.log(i,j,k+1,nums[i]+nums[j]+nums[k+1])
                }
                if (j>=k) break
                res.push(nums[i]+nums[j]+nums[k])
                // console.log(i,j,k,nums[i]+nums[j]+nums[k])
            }

        }
    }
    // console.log(res)
    return res.sort((a,b) => Math.abs(a-target) - Math.abs(b-target))[0]
    // let res = {}
    // for (let i=0;i<nums.length - 2;i++) {
    //     let temp = []
    //     let l=i+1;r = nums.length - 1
    //     // while(l<r) {
    //         // const middle = nums[i] + nums[l] + nums[r]
    //         // const right = nums[i] + nums[l] + nums[r-1]
    //         // const left = nums[i+1] + nums[l] + nums[r]
    //         // res[middle] = [nums[i], nums[l], nums[r]]
    //         // if (middle > target) {
    //         //     l++
    //         //     return 
    //         // }
    //     // }
    //     for (let j=i+1;j<nums.length -1;j++) {
    //         for (let k = j+1;k<nums.length;k++) {
    //             res[nums[i] + nums[j] + nums[k]] = [nums[i], nums[l], nums[r]]
    //         }
    //     }
    // }
    // const nearest = Object.keys(res).sort((a,b) => Math.abs(Number(a) - target) - Math.abs(Number(b) - target))[0]
    // return Number(nearest)
};
// @lc code=end

// console.log(threeSumClosest([-303,711,960,650,555,-465,685,-550,-218,379,-908,178,157,434,884,243,-35,-177,-463,-383,252,474,-733,180,896,336,778,15,-636,-404,-502,-255,347,875,380,546,254,-488,-284,221,521,439,287,672,115,563,549,-454,-759,339,-215,-280,638,-40,935,441,813,-16,45,116,60,987,-306,207,-283,413,414,525,-48,768,278,-903,-443,797,364,808,-541,246,-736,644,26,981,-969,789,989,745,112,-172,177,727,750,-591,-812,-895,915,-842,-117,-169,561,843,101,853,-992,829,452,185,-747,-711,-268,-450,-938,979,-781,-387,415,-939,661,-529,637,-75,281,167,-36,292,-334,-807,-578,-862,-754,8,-175,-843,-677,947,297,-683,-304,259,-70,-949,597,844,218,-12,-892,-25,-495,-136,679,-10,489,-251,-991,-522,52,-629,714,701,-272,-50,964,-496,-237,-248,37,451,352,877,492,-997,493,-735,147,-783,564,-168,793,596,195,161,119,605,667,730,81,-399,-46,-746,-316,-342,70,-473,486,585,108,-491,-298,-145,-691,-852,-767,-561,82,-618,648,-744,124,330,949,776,746,802,431,-362,-170,470,971,-417,-961,-477,170,692,-322,-530,-676,-15,-570,858,-791,172,-745,-770,937,887,-719,-260,-762,674,148,-704,568,-98,570,-717,162,-418,-489,-933,349,-250,-335,-900,-249,-545,-213,176,-663,-772,-539,-922,552,-914,-410,-94,-434,721,860,636,-424,-742,-444,-132,346,560,603,-135,-849,557,519,-208,-790,-993,660,556,-166,852,906,234,970,666,845,-240,922,696,-622,-577,704,420,-313,272,332,795,-786,189,807,773,882,-647,-327,-375,-928,805,319,-282,495,479,-782,-690,673,150,-415,-436,436,476,729,-659,-393,-71], 8801))