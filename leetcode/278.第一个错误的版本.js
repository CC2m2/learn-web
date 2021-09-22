/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */ 
    /* !仔细研究规律，化用二分查找
     * 该题找的是临界值，要注意两边临界值的取舍
     * 如果isbadversion返回false，
     * 那就说明这一个和它的左边区间不可能是，
     * 执行left = mid + 1；排除一半区间，
     * 反之，isbadversion返回true，
     * 说明这可能是第一个错误的也可能不是，
     * 不可排除，则执行right = mid；
     * 缩小右边边界但不要跳过这一个可能的错误点。
     * 
     * 不能用（left+right）/2形式，
     * 当left和right都是int，两个值的初始值都超过int限定大小的一半，
     * 那么left+right就会发生溢出，
     * 所以应该用left+(right-left)/2来防止求中值时候的溢出。
    */
     return function(n) {
        // binary search
       var start = 1, end = n; //序号从1开始
       while(start < end){
           var mid = Math.floor(start + (end-start) / 2); 
           if(isBadVersion(mid)){
                end = mid; // look on left side of mid
           }else{
               start = mid + 1; // look on the right side of mid
           }
       }
       return start; //当start===end时，找到临界值
    };
};
// @lc code=end

