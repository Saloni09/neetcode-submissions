class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let mp = new Map();
        for(let i=0;i<nums.length;i++){
            mp.set(nums[i], (mp.get(nums[i])||0)+1)
        }
        let arr =           Array.from(mp.entries()).sort((a,b)=>b[1]-a[1])
        return arr.slice(0,k).map(entry => entry[0])
    }
}
