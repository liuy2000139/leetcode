// 请实现一个大数相加函数，比如说 1111111111111111111 + 1，直接数字相加答案是错误的。

// 另请说明为什么在 JS 会存在这样的问题？
const fn = (a, b) => {
    const arr1 = BigInt(a).toString().split('').reverse()
    const arr2 = BigInt(b).toString().split('').reverse()
    const res = []
    let rest = 0

    while(arr1.length || arr2.length || rest) {
        const p = arr1.shift() || 0
        const q = arr2.shift() || 0
        const sum = parseInt(p) + parseInt(q)
        res.unshift((sum + rest) % 10)
        rest = Math.floor((sum + rest) / 10)
    }
    
    return res.join('')
}
