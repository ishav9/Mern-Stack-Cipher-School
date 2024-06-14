// Objects: it is a unique entity that contains some properties and methods.
// 1. Object literal
// 2. Object Constructor
// 3. object.create()

// CLASSES : classes are blueprint of an object
// ABSTRACTION : displaying only the essential  info and hiding the details
// ENCAPSULATION: the process of wrapping properties and functions within the single unit








// 1.OBJECT LITERAL
// let person ={
//     firstname: "Isha",
//     lastName: "Verma",
//     getfullname: function(){
//         return `The name of the person is ${person.firstname} ${person.lastName}`;
//     },
//         phoneNumber: {
//             mobile:"12345",
//             landline:"6789",
//         },
//     };

// console.log(person.getfullname());
// console.log(person.phoneNumber.landline);

//2. OBJECT CONSTRUCTOR
// function person(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
// let person1 = new person("isha","verma");
// let person2 = new person("abc","pqr");
// console.log(person1.firstname);
// console.log(`${person2.firstname} ${person2.lastname}`);

//3. CREATE NEW OBJECT
// const coder ={
//     isStudying:false,
//     printIntro: function(){
//         console.log(`my name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     },
// };
// const me = Object.create(coder);
// me.name="Isha verma";
// me.isStudying = true;
// me.printIntro();




// CLASSES
// class vehicle{
//     constructor(name,maker,engine){
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
//     getDetails(){
//         return `the name of the vehicle is ${this.name}`;
//     }
// }
// let v1 = new vehicle("city","honda","v8");
// let v2= new vehicle("taigun","volkswagen","1500cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());


//OR // traditional old way
// function vehicle(name,maker,engine){
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
// }
// vehicle.prototype.getDetails = function(){
//     return `the name of the vehicle is ${this.name}`;

// }
// let v1 = new vehicle("city","honda","v8");
// let v2= new vehicle("taigun","volkswagen","1500cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());




// class Person{
//     constructor(name,id){
//         this.name=name;
//         this.id = id;
//         let getDetails_NoAccess = function(){
//             return `First name is ${this.name} and id is ${this.id}`;
//         };
//         this.getDetails_Access =function(){
//             return `First name is ${this.name} and id is ${this.id}`;
//         };
//     }
//     // addAddress(newa){
//     //     this.newa = newa;
//     // }
//     // getDetails(){
//     //     console.log(`Name is ${this.name}, and address is ${this.newa}`);
//     // }
    
// }
// let p1 = new Person("isha",20);
// // p1.addAddress("ludhiana");
// // p1.getDetails();
// console.log(p1.name);
// console.log(p1.getDetails_NoAccess());
// console.log(p1.getDetails_Access());



class Person{
    constructor(name,id){
        this.name=name;
        this.id = id;
        let getDetails_NoAccess = function(){
            return `First name is ${this.name} and id is ${this.id}`;
        };
        
    }
    getDetails = function(){
        return `First name is ${this.name} and id is ${this.id}`;
    };
    
    
}
class Student extends Person{
    constructor(name,id,rollno){
        super(name,id);
        this.rollno = rollno;
    }
    getDetails = function(){
        return `First name is ${this.name} and id is ${this.id} and rollno is ${this.rollno}`;
    };
}
let p1 = new Person("isha",20);
// p1.addAddress("ludhiana");
// p1.getDetails();
console.log(p1.name);
console.log(p1.getDetails());

let s1 = new Student("isha",1222,20);
console.log(s1.getDetails());
