// Object in javascript

// const data = {
//     mark: 45,
//     name: "Zahid",
//     age: 30,
//     gpa: 3.5,
//     issPass: true,
//     address: {
//         city: "New York",
//         state: "NY",
//     },
   
//     friend: ["zahid", "faiz", "khan"],
 
// }

// console.log(data.name);
// console.log(data.address.city);

// if boy pass in above marks to print the friend list and then fail print no friends
// let mark = 30;
// if (mark === 45) {
//     console.log(data.friend);
// }else{
//     console.log("No friend");
// }


// let mark = 25;
// if (mark == 45) {
//     console.log(data.friend);
// }else{
//     console.log("No friend");
// }


const data = {
    products: [
        {
            name: "TV",
            description: "TV",
            category: "TV",
            price: 5000
        },

        {
            name: "laptop",
            description: "laptop",
            category: "laptop",
            price: 1000
        },

        {
            name: "mobile phone",
            description: "mobile phone",
            category: "mobile phone",
            price: 5000
        },
    ]
}

// console.log(data.products[1].name);

// const products = data.products;
// for (let i = 0; i < products.length; i++){
//     console.log(products[i].name);
// }

//how to sum all products price

// let sum = 0;
// for (let i = 0; i < products.length; i++){
//     sum += products[i].price;
// }
// console.log(sum);

// how to print available products to decrease 20% price

// let products = data.products;
// for (let i = 0; i < products.length; i++){
//     if (products[i].price > 0){
//         products[i].price -= 20;
//         console.log(products[i]);
//     }
// }

// how to print available products to increase 20% price

// let products = data.products;
// for (let i = 0; i < products.length; i++){
//     if (products[i].price > 0){
//         products[i].price += 20;
//         console.log(products[i]);
//     }
// }
