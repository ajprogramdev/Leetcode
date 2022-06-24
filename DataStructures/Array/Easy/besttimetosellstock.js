/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day
in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/

/*
Look for highest sell, and compare.
Steps:
1.Create a Variables to track profit=0 and lowestval=prices[0].
2.Loop through array, start index 1 not 0.
3.IF LowestValue < prices[index], verify if the profit is greater or not.
    if the profit is greater, set it to profit.
4.Else lowest value must be lower than the lowest, set lowestValue to current index.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let profit = 0;
    let lowestVal = prices[0]
    for (let i =1; i < prices.length; i++) {
        if (lowestVal < prices[i]){
            let verify = prices[i] - lowestVal;
            profit = verify > profit ? verify : profit; 
        } else {
            lowestVal = prices[i]
        }
    }
    
    return profit;
};
