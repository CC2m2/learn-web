/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  return myTwoSum(numbers, target);
};

function myTwoSum(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;

  while (low <= high){
    if (numbers[low] + numbers[high] === target) {
      return [low + 1, high + 1];
    }
    if (numbers[low] + numbers[high] <= target) {
      low++;
    } else {
      high--;
    }
  }
}
// @lc code=end

