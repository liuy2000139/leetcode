/**
 * @param {string} S
 * @return {number}
 */
 var countLetters = function(S) {
    let sum = S.length
    for(let j=0;j<S.length;j++){
      let cur = S[j]
      for(let i=j+1;i<S.length;i++){
        if(cur===S[i]){
          sum++
          continue
        }
        break
      } 
    }
};