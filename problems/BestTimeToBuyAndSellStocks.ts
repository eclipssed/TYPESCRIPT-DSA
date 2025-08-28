function maxProfit(prices: number[]): number {
  // Variable to keep track of the maximum profit we can achieve
  let maxProfit: number = 0;

  // Variable to keep track of the minimum price seen so far
  // Start with Infinity so any real stock price will be lower
  let minPrice: number = Infinity;

  // Loop through each price in the given array
  for (let price of prices) {
    // If we find a new minimum price, update it
    if (price < minPrice) {
      minPrice = price;
    }

    // Calculate potential profit if we sold at the current price
    let profit = price - minPrice;

    // Update maxProfit if this profit is greater than our current maxProfit
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  // Return the maximum profit found
  // If no profit can be made, it will return 0
  return maxProfit;
}
