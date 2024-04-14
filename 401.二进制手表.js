/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string[]}
 */
const fn = (arr1, arr2) => {
    let res = []
    for (let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length;j++) {
            res.push(`${arr1[i]}:${arr2[j]}`)
        }
    }
    return res
}
var readBinaryWatch = function(num) {
    if (num === 0) return ['0:00']
    let hour = {
        0: ['0'],
        1: ['1', '2', '4', '8'],
        2: ['3', '5', '6', '9', '10'],
        3: ['7', '11']
    }
    let minute = {
        0: ['00'],
        1: ['01', '02', '04', '08', '16', '32'],
        2: ['03','05','06','09','10','12','17','18','20','24','33','34','36','40','48'],
        3: ['07','11','19','35','13','21','37','25','41','49','14','22','38','26','42','50','28','44','56','52'],
        4: ['15','23','39','30','46','58','27','43','51','29','57','45','53','54'],
        5: ['47','55','59','31']
    }
    let res = []
    switch(num) {
        case 0:
            res = fn(hour['0'], minute['0'])
            break
        case 1:
            res = fn(hour['1'], minute['0'])
                .concat(fn(hour['0'], minute['1']))
            break
        case 2:
            res = fn(hour['2'], minute['0'])
            .concat(fn(hour['0'], minute['2']))
            .concat(fn(hour['1'], minute['1']))
            break
        case 3:
            res = fn(hour['3'], minute['0'])
            .concat(fn(hour['0'], minute['3']))
            .concat(fn(hour['2'], minute['1']))
            .concat(fn(hour['1'], minute['2']))
            break
        case 4:
            res = fn(hour['3'], minute['1'])
            .concat(fn(hour['2'], minute['2']))
            .concat(fn(hour['1'], minute['3']))
            .concat(fn(hour['0'], minute['4']))
            break
        case 5:
            res = fn(hour['3'], minute['2'])
            .concat(fn(hour['2'], minute['3']))
            .concat(fn(hour['1'], minute['4']))
            .concat(fn(hour['0'], minute['5']))
            break
        case 6:
            res = fn(hour['3'], minute['3'])
            .concat(fn(hour['2'], minute['4']))
            .concat(fn(hour['1'], minute['5']))
            break
        case 7:
            res = fn(hour['3'], minute['4'])
            .concat(fn(hour['2'], minute['5']))
            break
        case 8:
            res = fn(hour['3'], minute['5'])
            break
    }
    return res
};
// @lc code=end
