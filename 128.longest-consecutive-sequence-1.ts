/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive1(nums: number[]): number {
    // 自己的解法更优，性能更好
    if (nums.length == 0) {
        return 0;
    }
    let array = nums.sort((a, b) => { return a - b });
    let length = 1;
    let maxLength = 1;
    let start = array[0];
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if (start == element) {

        }
        else if (start + 1 == element) {
            start = element;
            length++;
            maxLength = Math.max(length, maxLength);
        }
        else {
            length = 1;
            start = element;
        }
    }

    return maxLength;
};
// @lc code=end

