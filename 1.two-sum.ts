/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for (let index = 0; index < nums.length; index++) {
        let num = nums[index];
        let result = map.get(target - num);
        if (result != null) {
            return [result, index];
        }
        map.set(num, index);
    }
    return [];
};
// @lc code=end

