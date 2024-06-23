/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)) filteredArr.push(arr[i]);
    }
    return filteredArr;
};


fn = function greaterThan10(n) { return n > 10; }
arr = [0,10,20,30]
const newArray = filter(arr, fn);
console.log('\nfilteredArr', newArray);