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
                result = preRes;   //记录下间隔最长的下标值
            }
        }
    });
    return s.substring(result.left,  result.right+1);
};

var dealString = function (s1, val, left, right) {
    //将多个连在一起的相同字符合在一起当作中心点
    while(right < s1.length){
        if(val === s1[right]){
            right++;
        }else {
            break;
        }
    }

    //合并中心点后，向两边扩散，寻找边界值下标
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