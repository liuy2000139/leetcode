/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
// var largestTriangleArea = function(points) {
//     // abc逆时针
//     return Math.abs((1/2)*(a[0]*b[1]+b[0]*c[1]+c[0]*a[1]-a[0]*c[1]-b[0]*a[1]-c[0]*b[1]))
// };
// // @lc code=end
// console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]))

const points = [[-35,19],[40,19],[27,-20],[35,-3],[44,20],[22,-21],[35,33],[-19,42],[11,47],[11,37]]
 var largestTriangleArea = function(points) {
    let max = 0
    var fn = (p1, p2, p3) => {
        const a = Math.sqrt(Math.pow(p2[1]-p1[1],2) + Math.pow(p2[0]-p1[0], 2))
        const b = Math.sqrt(Math.pow(p2[1]-p3[1],2) + Math.pow(p2[0]-p3[0], 2))
        const c = Math.sqrt(Math.pow(p1[1]-p3[1],2) + Math.pow(p1[0]-p3[0], 2))
        const p = (a+b+c)/2
        const s = Math.sqrt((p * (p-a) * (p-b) * (p-c)).toFixed(2))
        if (isNaN(s)) {
            console.log(s, p1, p2, p3, p * (p-a) * (p-b) * (p-c))

        }
        return s
    }
    for (let i=0;i<points.length-2;i++) {
        for (let j=i+1;j<points.length-1;j++) {
            for (k=j+1;k<points.length;k++) {
                const s = fn(points[i], points[j], points[k])
                max = Math.max(max, s)
            }
        }
    }
    return max
};
console.log(largestTriangleArea(points))
