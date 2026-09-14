class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let s = new Set(nums);
        let currentNum:number;
        let currentStreak:number;
        let max = 0;
        for(let num of s){
            if(!s.has(num-1)){
                
                currentNum = num;
                currentStreak = 1;
                
                while(s.has(currentNum + 1)){
                    currentNum++;
                    currentStreak++;
                }
                max= Math.max(max, currentStreak)
            }
        }
        return max
    }
}
