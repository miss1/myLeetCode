/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let arr1 = s.split('');
  let arr2 = [];
  while (arr1.length > 0) {
    let char = arr1.pop();
    if (arr2.length > 0) {
      let add = char + arr2[arr2.length - 1];
      if (add === '()' || add === '[]' || add === '{}') {
        arr2.pop();
      } else {
        arr2.push(char);
      }
    } else {
      arr2.push(char);
    }
  }
  return arr2.length === 0
};
