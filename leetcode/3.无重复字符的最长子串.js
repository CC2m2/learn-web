/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * 滑动窗口 hash
 */
 var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  
  let map = new Map();
  let len = 0, max = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      max = Math.max(len , max);
      i -= len; //这里可以从第一个不重复的下一项开始
      len = 0;
      map.clear();
    } else {
      map.set(s[i], 1);
      len++;
    }
  }
  max = Math.max(len , max); 
  return max;
};

/**
 * @param {string} s
 * @return {number}
 * 滑动窗口 队列
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  let queue = [];
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (queue.indexOf(s[i]) === -1) {
      queue.push(s[i]);
    } else {
      queue.shift();
      i--; //重复的项可能是下一个字串的开头
      continue;
    }
    max = Math.max(queue.length, max);
  }

  return max;
};
// @lc code=end

