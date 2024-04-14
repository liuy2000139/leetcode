/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let res = ''
    let len = Math.min(word1.length, word2.length)
    for (let i=0;i<len;i++) {

        res += word1[i]
        res += word2[i]
    
    }
    res += word1.slice(len)
    res += word2.slice(len)
    return res
};