/**
 * @param {string} s
 * @return {number}
 */

var maximumLength = function (s) {
  let length = s.length
  let res = {}
  let resVal = ""
  for (let len = length; len > 0 && !resVal; len--) {
    for (let i = 0; i <= length - len && !resVal; i++) {
      const current = s.slice(i, i + len)
    //   console.log(i, len, current)
      if (is(current)) {
        res[current] = (res[current] || 0) + 1
        if (res[current] >= 3) resVal = current
      }
    }
  }
  return resVal.length || -1
}

const is = (s) => {
  if (!s.length) return false
  if (s.length === 1) return true
  const res = []
  for (let i = 0; i < s.length; i++) {
    if (!res.includes(s[i])) res.push(s[i])
  }
  return res.length === 1
}

console.log(maximumLength('aaaa'))
console.log('-------------')
console.log(maximumLength('abcdef'))
console.log('-------------')
console.log(maximumLength('abcaba'))
console.log('-------------')
