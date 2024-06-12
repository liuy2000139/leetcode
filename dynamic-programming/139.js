/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	const dp = []
	let m = s.length
	dp[m] = true
	for (let i = m - 1; i >= 0; i--) {
		for (let j = i; j < m; j++) {
			let current = s.slice(i, j + 1)
			if (wordDict.includes(current) && dp[j + 1]) {
				dp[i] = true
				j = m
			}
		}
	}
	return dp[0] || false
}
