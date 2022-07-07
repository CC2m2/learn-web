/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let slowPointer = 0; 
  let fastPointer = 0;

  while (fastPointer < nums.length) {
    if (nums[fastPointer] !== val) {
      nums[slowPointer] = nums[fastPointer];
      slowPointer ++;
    }
    fastPointer ++;
  }

  return slowPointer;
};
// @lc code=end

