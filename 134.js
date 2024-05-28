/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let res = -1
    let length = gas.length
    gas.push(...gas)
    cost.push(...cost)
    for (let i=0;i<gas.length;i++) {
        let curGas= 0
        let base = length
        while(base > 0) {
            curGas += gas[i]
            const curCost = cost[i + length - base]
            if (curCost > curGas) {
                base = -1
            } else {
                const curAdd = cost[i + length - base]
                curGas -= curAdd
                base--
            }
        }
        if (base === 0) {
            res = i
            break
        }
    }
    return res
};

console.log(canCompleteCircuit([2,3,4], [3,4,3]))