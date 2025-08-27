function maxProfit(prices: number[]): number {
  let maxProfit: number = 0;
  let minProfit: number = Infinity;

  for(let price of prices){
    if(price < minProfit){
        minProfit = price

    }

    let profit = price - minProfit;

    if(profit > maxProfit){
        maxProfit = profit
    }
  }
  return maxProfit
}
