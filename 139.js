var wordBreak = function(s, wordDict) {
    if (!s.length) return true
    if (!wordDict.length) return false
    if (wordDict.includes(s)) {
        console.log(wordDict, s, 1)
        return true
    }
    let res = false
    for (let i=0;i<wordDict.length;i++) {
        const arr = s.split(wordDict[i])
        if (arr.length <= 1) continue
        res = arr.filter(t => !!t).every(t => wordBreak(t, wordDict))
        if (res) break
    }

	return res
};

console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))