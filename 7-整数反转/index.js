/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let tag = false;  //是否负数
    let res;
    if (x < 0){
        tag = true;
        x = Math.abs(x);
    }
    let arr = x.toString().split('');
    res = parseInt(arr.reverse().join(''));
    if (tag){
        res = parseInt('-'+res);
    }
    if (res < -Math.pow(2,31) || res > Math.pow(2, 31)-1){
        return 0;
    }else {
        return res;
    }
};