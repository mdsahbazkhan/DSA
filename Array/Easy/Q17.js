// Best Time to Buy and Sell Stock


//Brute 
// maxProfit = 0
// for i in range(0, n):
//    for j in range(i+1, n):
//        profit = prices[j] - prices[i]
//        maxProfit = max(maxProfit, profit)
// return maxProfit;

//Optimal
function buySell(prices){
    let n= prices.length;
    let maxProfit=0;
    let min=prices[0];
    for(let i=1;i<n;i++){
        let cost = prices[i]-min;
        maxProfit=Math.max(maxProfit,cost);
        min= Math.min(min,prices[i])
    }
    return maxProfit
}
console.log(buySell([7,1,5,3,4]));
