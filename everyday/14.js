// 有一个嵌套层次很深的对象，key 都是 a_b 形式 ，需要改成 ab 的形式，注意不能用递归。

const a = {
  a_y: {
    a_z: {
      y_x: 6
    },
    b_c: 1
  }
}
const fn = obj => {
    let arr = [obj]
    while(arr.length) {
        const current = arr.shift()
        for (let key in current) {
            if (current.hasOwnProperty(key)) {
                const currentKey = key.replace('_', '')
                current[currentKey] = current[key]
                delete current[key]
                arr.push(current[currentKey])
            }
        }
    }
    return obj
}
console.log(fn(a))