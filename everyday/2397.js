const getC = (list, num) => {
    if (list.length === 0 || num === 0) return []
    if (num === 1) return list.map(t => [t])
    const arr = []
    for (let i=0;i<list.length-num+1;i++) {
        const temp = getC(list.slice(i + 1), num-1)
        temp.forEach(cur => {
            arr.push([list[i], ...cur])
        })
    }
    return arr
}

var maximumRows = function(matrix, numSelect) {
    if (matrix.length === 0 || numSelect === 0) return 0
    let arr = []
    for (let i = 0;i<matrix[0].length;i++) {
        arr.push(i)
    }
    const res = getC(arr, numSelect)
    let count = 0
    res.forEach(cur => {
        let curCount= 0
        matrix.forEach((t, i) => {
            if (t.every(v => !v)) {
                curCount++
            } else if(t.find((v, idx) => v && !cur.includes(idx))) {
            } else {
                curCount++
            }
        })
        count = Math.max(count, curCount)
        
    })

    return count
};

const res  =maximumRows([[1],[0]], 1)
console.log(res)