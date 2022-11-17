// default parameters function

// const fun = (name) => {
//     console.log(`Hello ${name}`);
// }

// fun();

// Regular Expressions in JavaScript
// const str = "Zahid Zahid Zahid";
// const t = str.replace(/Zahid/ig, "Khan");
// console.log(t);

// Rest operations in Array
// const list1 = [1,3,4,5,6,7,8,9,10,11];
// const list2 = [45,55,...list1,66,77];

// console.log(list2);

// rest operations in object

// const obj1 = {
//     name: 'zahid',
//     age: 45,
// }

// const obj2 = {
//     ...obj1,
//     gpa: 3.5,
//     section: 'A',
//     address: {
//         country: 'pakistan',
//         city: 'hangu'
//  }
// }

// console.log(obj2);

// separate operations in javascript

const sum =  (a, b) =>  {
    console.log(a + b);
}

const values = [10, 20];
// sum(values[0], values[1]);

// separate values
sum(...values);