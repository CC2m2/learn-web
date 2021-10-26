/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 暴力破解 O(n2)
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let otherNum = target - nums[i];
    let index = nums.indexOf(otherNum, i + 1);
    if (index > 0) {
      return [i, index];
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * hash => Object O(n)
 */
 var twoSum = function(nums, target) {
	let hash = {};
	
	for(let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if(hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * hash => Map() O(n)
 */
 var twoSum = function(nums, target) {
  let map = new Map();
  
  for(let i = 0; i < nums.length; i ++) {
      if(map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i];
      } else {
          map.set(nums[i], i);
      }
  }
return [];
};
// @lc code=end