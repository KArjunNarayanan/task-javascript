
let products = [{
             id:1,
             name:"watch",
             price: 430 
            },
            {
                id:2,
                name:"shirt",
                price:530
            }
];

function getProduct(id) {
    let found = products.find((pro) => {
        if(pro.id === id){
            return true;
        }
    } );
    return found;
}
const result = getProduct(1);

function displayProduct(res){
    console.log(`Name: ${res.name} and Price: ${res.price}`);
}
if(result){
    displayProduct(result);
}else{
    console.log("Product Not Found!");
}

function calculateDiscount(price,discount){
    let newPrice = price - price * (discount/100);
    return newPrice;
}
console.log("Price after discount: ",calculateDiscount(1500,20));








