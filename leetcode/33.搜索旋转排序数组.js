/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  return myBinarySearch(nums, target);
};

function myBinarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    //!关键 条件划分
    if (nums[low] <= nums[mid]) { //左边是递增区域 二分查找要在有序区域内进行
      if (nums[low] <= target && target <= nums[mid]) {
        // target is in the left
        high = mid - 1;
      } else {
        // target is in the right
        low = mid + 1;
      }
    }

    // Otherwise, the right side is sorted
    else { //右边是递增区域
      if (nums[mid] <= target && target <= nums[high]) {
        // target is in the right
        low = mid + 1;
      } else {
        // target is in the left
        high = mid - 1;
      }
    }
  }

  return -1;
}

//if条件里放能确定的一边的条件(找到一定是递增的一块区域)
//!关键：mid两边中肯定有一边是递增的
//有多种可能的扔到else里，下一次再判断，有点像递归的感觉
// @lc code=end
