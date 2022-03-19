//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sortted in a non decreasing order.


var sortedSquares = function(nums) {
    const result = new Array(nums.length).fill(0);
    let i = 0;
    let j = nums.length - 1;
    let resultIdx = nums.length - 1;

    while(i <= j) {
        let leftVal = Math.pow(nums[i], 2);
        let rightVal = Math.pow(nums[j], 2);

        if(leftVal < rightVal) {
            result[resultIdx] = rightVal;
            j--;
        } else {
            result[resultIdx] = leftVal;
            i++;
        }
        resultIdx--;
    }

    return result;


};
console.log(sortedSquares([-4,-1,0,3,10]));