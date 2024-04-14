/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    let x=1,y=0
    for (let i of s) {
        if (i === 'A') {
            x = 2 * x + y
        }
        if (i === 'B') {
            y = 2 * y + x
        }
    }
    return x + y
};