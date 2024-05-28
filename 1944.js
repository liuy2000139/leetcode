/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    return heights.map((t,i) => {
        return fn(t, heights.slice(i+1))
    })
};
const fn = (height, heights) => {
    if (height === 6) {
        debugger
    }
    if (!heights.length) return 0
    const heightestIdx = heights.indexOf(Math.max(...heights))
    let count = 1
    let base = heights[0]
    for(let i = 1;i<heightestIdx+1;i++) {
        if (heights[i] > base) {
            count++
            base = heights[i]
        }
    }


    for(let i = heightestIdx+1;i<heights.length;i++) {

    return count
}

console.log(canSeePersonsCount([10,6,8,5,11,9]))
console.log([3,1,2,1,1,0])