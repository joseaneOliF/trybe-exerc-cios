
const costOfProduct = 100;
const saleValue = 300;

//if (costOfProduct >= 0 && saleValue >= 0) {
//  const totalCostOfProduct = costOfProduct * 1.2;
//  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//  console.log(totalProfit);
//} else {
//  console.log("Error, os valores não podem ser negativos");
//};

if(costOfProduct >= 0 && saleValue >= 0){
    const totalCostOfProduct = costOfProduct + (costOfProduct * 0.20);
    const totalProfit = saleValue - totalCostOfProduct;
    console.log(totalProfit);
} else {
    console.log("Error! valores negativos");
}