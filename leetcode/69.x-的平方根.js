/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  return binarySearch(x);
};

function binarySearch(x) {
  let low = 0;
  let high = Math.floor(x / 2) + 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid === x) return mid;

    if (mid * mid < x) {
      low = mid + 1;
    } else{
      high = mid - 1;
    }
  }

  return high;
}

// @lc code=end

