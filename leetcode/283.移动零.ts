/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let slowPointer = 0; 
  let fastPointer = 0;
  let len = nums.length;

  while (fastPointer < nums.length) {
    if (nums[fastPointer] !== 0) {
      nums[slowPointer] = nums[fastPointer];
      slowPointer ++;
    }
    fastPointer ++;
  }

  for (let i = slowPointer; i < len; i ++) {
    nums[i] = 0;
  }
};
// @lc code=end

