class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
    const us = new Set<string>();

    let si = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {

        while (us.has(s[i])) {
            us.delete(s[si]);
            si++;
        }

        us.add(s[i]);

        max = Math.max(max, i - si + 1);
    }

    return max;
}
}
