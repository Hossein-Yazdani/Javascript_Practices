var shopProducts = [
  { id: 1, name: "laptop", price: 25.0 },
  { id: 2, name: "phone", price: 15.0 },
  { id: 3, name: "tablet", price: 5.0 },
  { id: 4, name: "computer", price: 40.0 },
  { id: 5, name: "Hard disk", price: 10.0 },
  { id: 6, name: "SSD", price: 3.0 },
  { id: 7, name: "Ps5", price: 100.0 },
  { id: 8, name: "Ps4", price: 35.0 },
  { id: 9, name: "Web-cam", price: 7.0 },
  { id: 10, name: "CD-dirve", price: 8.0 },
  { id: 11, name: "Cpu i5", price: 11.0 },
];
var userBasket = [
  { id: 1, name: "laptop", price: 25.0 },
  { id: 2, name: "phone", price: 15.0 },
  { id: 3, name: "tablet", price: 5.0 },
  { id: 4, name: "computer", price: 40.0 },
  { id: 5, name: "Hard disk", price: 10.0 },
  { id: 6, name: "SSD", price: 3.0 },
];
var productFilter = userBasket.filter(function (filter) {
  return filter.price <= 10.0;
});
var productCounter = null;
productFilter.forEach(function () {
  productCounter += 10
});
var sum = null
userBasket.forEach(function(cost){
    sum = cost.price + sum
})
console.log("all cost : " + (sum+productCounter))
