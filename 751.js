const ip = "255.0.0.7", n = 10
/**
 * @param {string} ip
 * @param {number} n
 * @return {string[]}
 */
 var ipToCIDR = function(ip, n) {
    let res = []
     while(n > 0) {
        let arr = ip.split('.').map(v => parseInt(v).toString(2))
        
        const last = arr[arr.length-1]
        const base = '1'.repeat(last.length)
        const num = parseInt(base, 2) - parseInt(last, 2) + 1
        n = n - num
        res.push(`${ip}/${num === 1 ? 32 : 32-last.length + 1}`)
        arr[arr.length-1] = '1' + '0'.repeat(last.length)
        ip = arr.map(v => parseInt(v, 2)).join('.')
    
     }
    
     console.log(res)
};

ipToCIDR(ip, n)