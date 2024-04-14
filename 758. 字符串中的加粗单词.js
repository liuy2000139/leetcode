// 给定一个关键词集合 words 和一个字符串 S，将所有 S 中出现的关键词加粗。所有在标签 和  中的字母都会加粗。

// 返回的字符串需要使用尽可能少的标签，当然标签应形成有效的组合。

// 例如，给定 words = ["ab", "bc"] 和 S = "aabcd"，需要返回 "aabcd"。注意返回 "aabcd" 会使用更多的标签，因此是错误的。

//  

// 提示：

// words 长度的范围为 [0, 50]。
// words[i] 长度的范围为 [1, 10]。
// S 长度的范围为 [0, 500]。
// 所有 words[i] 和 S 中的字符都为小写字母。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/bold-words-in-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var boldWords = function(words, S) {
    let temp = []
    for (let i=0;i<words.length;i++) {
        for (let j=0;j<S.length-words[i].length;j++) {
            if (S.slice(j, j+words[i].length) === words[i]) {
                temp.push([j, j+words[i].length-1])
            }
        }
    }
    console.log(temp)
    for (let i=0;i<temp.length-1;i++) {
        if (temp[i][1] >= temp[i+1][0]) {
            temp[i][1] = temp[i+1][1]
            temp.splice(i+1, 1)
            i--
        }
    }
    S = S.split('')
    console.log(temp)
    for (let i=0;i<temp.reverse().length;i++) {
        S.splice(temp[i][1]+1, 0, '</b>')
        S.splice(temp[i][0], 0, '<b>')
    }
    return S.join('')
};
console.log(boldWords(["ccb","b","d","cba","dc"], "eeaadadadc"))