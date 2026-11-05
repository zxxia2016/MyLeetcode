/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, Array<string>>();
    strs.forEach(element => {
        let key = Array.from(element).sort().toString();
        let result = map.get(key);
        if (result) {
            result.push(element);
        }
        else {
            map.set(key, [element]);
        }
    });
    return Array.from(map.values());
};
// @lc code=end

