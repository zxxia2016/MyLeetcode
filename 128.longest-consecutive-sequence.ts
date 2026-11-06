/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    //哈希解法
    let set = new Set(nums);
    let map = new Map<number, number>();
    set.forEach(element => {
        map.set(element, element);
    });
    let values = set.values();
    let maxLength = 0;
    let length = 0;
    for (let element of values) {
        length++;
        if (!map.has(element - 1)) {
            while (map.has(++element)) {
                length++;
            }
            maxLength = Math.max(length, maxLength);
        }
        length = 0
    }
    return maxLength;
};
// @lc code=end

