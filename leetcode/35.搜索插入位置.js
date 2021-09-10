/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, low, high) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}
// @lc code=end
