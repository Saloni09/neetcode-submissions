class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0; let n = prices.length;
        let buy = 0;
        let sell = 1;
        while (sell < n) {
            if (prices[buy] < prices[sell]) {
                let profit = prices[sell] - prices[buy];
                max = Math.max(profit, max);
            } else {
                buy = sell;
            }
            sell++;
        }
        return max;
    }
}
