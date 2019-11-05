/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let s1 = [];
    let preRes = '';
    let result = '';
    for (let i = 0; i < s.length; i++){
        s1.push('#');
        s1.push(s.charAt(i));
    }
    s1.push('#');

    for (let i = 1; i < s1.length; i++){
        preRes = s1[i];
        for (let j = i + 1; j < s1.length; j++){
            let preIndex = 2*i-j;
            if (preIndex >= 0 && s1[preIndex] === s1[j]){
                preRes = s1[preIndex] + preRes + s1[j];
            }else {
                break;
            }
        }
        if (preRes.length > result.length){
            result = preRes;
        }
    }

    return result.split('#').join('');
};