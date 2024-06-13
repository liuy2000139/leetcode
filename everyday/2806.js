/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  const a = purchaseAmount / 10
  let b = a % 1
  let c = Math.floor(a)
  if (b < 0.5) {
    return 100 - c * 10
  } else {
    return 100 - c * 10 - 10
  }
}
