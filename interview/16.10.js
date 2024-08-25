/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function(birth, death) {
    birth.sort((a,b) => a-b)
    death.sort((a,b) => b-a)
    const min = Math.min(...birth)
    const max = Math.max(...death)
    let res = []
    for (let i = min;i <= max;i++) {
        if (!birth.includes(i) && !death.includes(i)) continue
        const bIdx = birth.findIndex(b => b > i)
        const b = bIdx === -1 ? birth.length : bIdx

        const dIdx = death.findIndex(d => d < i)
        const d = dIdx === -1 ? 0 : (death.length - dIdx)
        res[b-d] = res[b-d] || i
    }
    return res.pop()
};


console.log(maxAliveYear(
    [1972,1908,1915,1957,1960,1948,1912,1903,1949,1977,1900,1957,1934,1929,1913,1902,1903,1901], 
    [1997,1932,1963,1997,1983,2000,1926,1962,1955,1997,1998,1989,1992,1975,1940,1903,1983,1969]
))