/**
 * PROBLEM STATEMENT
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * Input: prices = [7,1,5,3,6,4] Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */
//Brute-force Approach ----> This solution exceeded time limit which means a really bad solution
const maxProfit = (prices) => {
    let globalProfit = 0;
    for (let i = 0; i < prices.length-1; i++) { // i=0,1,2,3,4
        for (let j = i+1; j < prices.length; j++) { //j=1
           const currentprofit = prices[j]-prices[i]; // sell - buy = profit >0 
            if (currentprofit > globalProfit) {
                globalProfit = currentprofit;
            } 
        }       
    }
    return globalProfit;
}

//console.log(maxProfit([7,1,5,3,6,4]));

// greedy algorithm

const findMaxProfit = (prices) => {
    let minStockBuyPrice = prices[0] || 0;
    let maxProfit =0 ;
    for (let i = 0; i < prices.length; i++) {
       const currentprofit = prices[i]- minStockBuyPrice;
        if(prices[i] < minStockBuyPrice) {
            minStockBuyPrice=prices[i];
        }
        maxProfit = Math.max(maxProfit, currentprofit);
    }
    return maxProfit
}
console.log(findMaxProfit([7,1,5,3,6,4]));

