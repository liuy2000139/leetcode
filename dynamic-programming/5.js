/**
 * @param {string} s
 * @return {string}
 */
const fn = (s) => {
  let len = s.length
  let i = Math.floor(len / 2)
  let j = i
  if (len % 2 === 0) {
    i = len / 2 - 1
    j = i + 1
  }
  while (i >= 0 && j < len && s[i] === s[j]) {
    i--
    j++
  }
  return i === -1 && j === len
}
var longestPalindrome = function (s) {
  let res = ''
  while (!res) {
    if (fn(s)) {
      res = s
    } else {
      s = s.slice(0, s.length - 1)
    }
  }
  for (let i = 0; i < s.length; i++) {}
}
