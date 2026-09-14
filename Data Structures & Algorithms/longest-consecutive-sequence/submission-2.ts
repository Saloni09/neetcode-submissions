class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let s = new Set(nums);
        let startNum:number;
        let currentStreak:number;
        let max = 0;
        for(let num of s){
            if(!s.has(num-1)){
                
                startNum = num;
                currentStreak = 1;
                
                while(s.has(startNum + 1)){
                    startNum++;
                    currentStreak++;
                }
                max= Math.max(max, currentStreak)
            }
        }
        return max
    }
}
