var shopProducts = [
  { id: 1, name: "laptop", price: 25.0 },
  { id: 2, name: "phone", price: 15.0 },
  { id: 3, name: "tablet", price: 5.0 },
  { id: 4, name: "computer", price: 40.0 },
  { id: 5, name: "Hard disk", price: 10.0 },
  { id: 6, name: "SSD", price: 3.0 },
];
var userBasket = [
  { id: 1, name: "laptop", price: 25.0 },
  { id: 2, name: "phone", price: 15.0 },
  { id: 3, name: "tablet", price: 5.0 },
];
var userBuy = prompt("Enter Your Product Name : ");
var userNewBuy = {};
var isproduct = shopProducts.some(function (product) {
  if (product.name == userBuy) {
    alert("This product is available");
    userNewBuy = {
      id: 4,
      name: product.name,
      price: product.price,
    
    }
    userBasket.push(userNewBuy);
    return true;
  }
});
if(isproduct === false){
    alert("This product is not available")
}
var sum = null
userBasket.forEach(function (avg) {
    sum += avg.price
})
console.log("avg : " + sum / userBasket.length + "\n" + "totall price : " + sum);
