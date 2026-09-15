class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const s = new Set(nums);
        return s.size != nums.length?true:false
        // for(let num of nums){
        //     if(s.has(num))return true;
        //     s.add(num)
        // }
        //return false
    }
}
