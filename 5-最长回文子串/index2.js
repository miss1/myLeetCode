/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = '';
    let preRes = '';
    let s1 = s.split('');
    s1.forEach((val, index) => {
        preRes = dealString(s1, val, index - 1, index + 1);
        if (preRes){
            if (result === '' || result.size < preRes.size){
                result = preRes;
            }
        }
    });
    return s.substring(result.left,  result.right+1);
};

var dealString = function (s1, val, left, right) {
    while(right < s1.length){
        if(val === s1[right]){
            right++;
        }else {
            break;
        }
    }

    while (left >= 0 && right < s1.length){
        if (s1[left] === s1[right]){
            left--;
            right++;
        }else {
            break;
        }
    }
    return {left: ++left, right: --right, size: right-left+1};
};