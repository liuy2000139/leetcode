/**
 * @param {number[]} coins
 * @return {number}
 */
 var minCount = function(coins) {
    return coins.map(v => Math.ceil(v/2)).reduce((a,b) => a+b,0)
};