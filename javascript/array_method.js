// Array destructuring
// const names = ["zahid", "laiq", "jalil", "khan"];

// const [name1, , name2] = names;

// console.log(name2);

const student_list = {
    name: "zahid",
    age: 32,
    grade: "A",
    marks: 44,
    education: ["math", "algebra", "mathematics", "science"],
    address: {
        city: "Bangalore",
        street: "Park Lane",
        building: "12",
    }
    
}

const {name, address} = student_list;

console.log(name,address);




