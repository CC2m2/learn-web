/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let slowPointer = 0;
  let fastPointer = 1;
  
  while (fastPointer < nums.length) {
    if (nums[slowPointer] !== nums[fastPointer]) {
      slowPointer ++;
      nums[slowPointer] = nums[fastPointer];
    }
    fastPointer ++;
  }

  return slowPointer + 1;
};
// @lc code=end

