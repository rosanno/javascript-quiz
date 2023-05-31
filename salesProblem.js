let products = [
  { name: "Product A", profit: -75 },
  { name: "Product B", profit: -70 },
  { name: "Product C", profit: 93 },
  { name: "Product D", profit: 5 },
  { name: "Product E", profit: 88 },
  { name: "Product F", profit: 29 },
];

console.log("Top Product:", topProduct(products));
console.log("Bottom Product:", bottomProduct(products));
console.log("Zero Profit Product:", zeroProfitProduct(products));

function topProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let topProduct = productProfitArray[0];

  for (let i = 1; i < productProfitArray.length; i++) {
    productProfitArray[i].profit > topProduct.profit && (topProduct = productProfitArray[i]);
  }

  return topProduct;
}

function bottomProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let bottomProduct = productProfitArray[0];

  for (let i = 1; i < productProfitArray.length; i++) {
    productProfitArray[i].profit < bottomProduct.profit && (bottomProduct = productProfitArray[i]);
  }

  return bottomProduct;
}

function zeroProfitProduct(productProfitArray) {
  if (productProfitArray.length === 0) {
    return "No Data";
  }

  let zeroProduct = "";
  let nearestToZero = null;

  for (let i = 0; i < productProfitArray.length; i++) {
    let product = productProfitArray[i];

    if (
      nearestToZero === null ||
      product.profit < Math.abs(nearestToZero) ||
      (product.profit === Math.abs(nearestToZero) && product.profit > 0)
    ) {
      nearestToZero = product.profit;
      zeroProduct = product;
    }
  }

  return zeroProduct;
}
