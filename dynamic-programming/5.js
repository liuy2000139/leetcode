/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = (s) => {
	const dp = []
	let m = s.length
	let l = 0, r = 0

	for (let i = m - 1; i >= 0; i--) {
		dp[i] = []
		for (let j = i; j < m; j++) {
			let current = false
			if (i === j) {
				current = true
			} else {
				if (j - i === 1) {
					current = s[i] === s[j]
				} else {
					current = s[i] === s[j] && dp[i + 1][j - 1]
				}
			}
			dp[i][j] = current
			if (current) {
				if (j - i > r - l) {
					l = i
					r = j
				}
			}
		}
	}
	return s.slice(l, r + 1)
}
