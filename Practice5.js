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
  var userChoice = prompt("Pick a number : " +"\n" + "1-Delete" +"\n" + "2-Add");
  var userDeleteChoice 
  if (userChoice == 1) {
    userDeleteChoice = +prompt("Enter Number of the product you want to delete");
    userDeleteChoice -= 1
    userBasket.splice(userDeleteChoice,1);
    var userNewItem
  }else if(userChoice == 2){
    userNewItem = prompt("Enter New Product Name")
    var userAddedItem = {}
    var isProduct =shopProducts.some(function(user){
        if(user.name == userNewItem){
            userAddedItem = user
            return true
        }
    })
    if(isProduct === true){
        alert("This product is available")
        userAddedItem = {id: 4, name: userAddedItem.name, price: userAddedItem.price}
        userBasket.push(userAddedItem)
    }else{
        alert("Product is not available")
    }
  }
  console.log(userBasket);
  