var x=15;
{
    const x = 5;
    // const and let are very similar
    console.log(x);
    // if we use the const then we cant redeclare it
}
console.log(x);




var a = function(x,y){
    return x+y;
}
console.log(a(5,6));

const b = (x,y)=>{
    return x+y;
}
console.log(b(5,6));







// spread operator -> explands a array like data structure in 4 dots , explanding the iterator
// const q1 = ["jan","feb","Mar"]
// const q2 = ["apr","may","jun"]
// const q3 = ["july","aug","sep"]
// const q4 = ["oct","nov","dec"]
// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);


const mynumbers = [25,12,50,-5];
let maxValue = Math.max(...mynumbers);
console.log(maxValue);


// for loop 
let sum = 0;
for(let num of mynumbers){
    sum += num;
}
console.log(sum);


const name = 'Cipherschools';
let text = "";
for(let ch of name){
    text += ch +" ";
}
console.log(text);



// maps
// const fruits =  new Map([["apples",500],["bananas",30]]);
// console.log(fruits);
// console.log(fruits.get("apples"));

// set
// const letters = new Set();
// letters.add("a");
// letters.add("b");
// console.log(letters);

// classes
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
const mycar1 = new Car("Honda",2024);
const mycar2 = new Car("Porsche",2020);
console.log(mycar1, mycar2);


//
// const myFunction = () =>{  
//     return myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("This is inside promise");
//         resolve();
//     },2000);
// })
// };
// myFunction()
// .then(()=>{
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.log("Rejected");
// })



// symbol

const person ={
    firstname : "Isha",
    lastName :"verma",
    age:30,
    eyecolour:"brown",
};
let id = Symbol("id");
person[id] = 140111; 
console.log(person)
// the reference will be different everytime we run this code


// default parameters
// const addTwoNumbers = (a,b=10) =>a+b;
// console.log(addTwoNumbers(5));

const addTwoNumbers = (...args) =>{
   
    let sum =0;
    for(let arg of args){
        sum+=arg;
    }return sum;
};
console.log(addTwoNumbers(10,11,13,19));

