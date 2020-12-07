/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let num = 0;
    let astr = "";
    for(let i = 0; i < s.length; i++){
        let x = s.charAt(i);
        let index = astr.indexOf(x);
        if(index === -1){
            astr += x;
            if(astr.length > num){
                num = astr.length;
            }
        }else {
            if(astr.length > num){
                num = astr.length;
            }
            astr+=x;
            astr = astr.slice(index+1);
        }
    }
    return num;
};