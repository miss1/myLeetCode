/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let res = 0;
  s = s.replace(/^\s*/g, '');
  let start = s.charAt(0);
  if (start === '+' || start === '-' || /^\d$/.test(start)) {
    res = start;
    for (let char of s.substr(1)) {
      if (/^\d$/.test(char)){
        res += char;
      }else {
        break;
      }
    }
    res = +res;
  }

  let limit = Math.pow(2,31);
  return (res > limit -1 && limit -1) || (res < -limit && -limit) || res || 0;
};
