class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0; let n = prices.length;
        let buy = prices[0];
        let sell = 1;
        for(let i=1;i<prices.length;i++){
            if(prices[i]>buy){
                max=Math.max(max, prices[i]-buy);
            }else buy=prices[i];
        }
        return max;
    }
}
