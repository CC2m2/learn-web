/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 暴力破解 sort函数大于O(n)
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);
  let count = 1;
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == 1) {
      count++;
      max = Math.max(max, count);
    } else if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      count = 1;
    }
  }

  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 * hash O(n)?
 * 把所有数字放到一个哈希表，
 * 从哈希表中任意取一个值，
 * 删除掉之前之后的所有连续数字，
 * 然后更新目前的最长连续序列长度
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let map = new Map();
  nums.forEach((item) => map.set(item, 1));
  let len = 1;
  let max = 1;

  for (let i = 0; i < nums.length; i++) {    
    let offset = 1;
    while (map.has(nums[i] - offset)) {
      map.delete(nums[i] - offset);
      len++;
      offset++;
    }

    offset = 1;
    while (map.has(nums[i] + offset)) {
      map.delete(nums[i] + offset);
      len++;
      offset++;
    }

    max = Math.max(len, max);
    len = 1;
  }
  return max;
};
// @lc code=end
