/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let res = [];
    let tag = 0;
    if (numRows < 2){
        return s;
    }
    s.split('').forEach((val, index) => {
        if (res[tag] === undefined){
            res[tag] = val;
        }else {
            res[tag] += val;
        }
        let stag = Math.floor(index/(numRows-1))%2;
        if (stag === 0){
            tag++;
        }else {
            tag--;
        }
    });
    return res.join('');
};
