let str = "Let";
const strCons = "Const";
// Arrow functions
let arrowFunction = (a,b) => {
    console.log(a+b)
}
arrowFunction()
//for of loops
let brands = ["BMW", "Volvo", "Mini"];
let text = "";
//for of loop
for (let x of brands) {
  console.log(x)
}
// class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    showCarInfo()
    {
        console.log(this.name, this.year)
    }
  }
  const car = new Car("Honda", 2018);
  car.showCarInfo()
  // promises
  const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("hello"); }, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value)
  });
  //in case of promise rejection
  myPromise.catch(function(value) {
    console.log(value)
  });
//Default Parameter
function myFunction(x, y = 10) {
    return x + y;
  }
  myFunction(5);
// Rest Parameter (usecase : when you do not know how many arguments will recieve)
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  //String includes()
let text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true
//Array.from()
Array.from("saudsaleem")   // Returns [s,a,u,d,s,a,l,e,e,m]
//math sign
Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1
Number.isInteger(10);        // returns true
Number.isInteger(10.5);      // returns false
//symbol type
const person = {
    firstName: "saud",
    lastName: "saleem",
    age: 23,x
  };
  
  let id = Symbol('id');
  person[id] = 140353;
  console.log(person[id])

//   ASYNC AWAIT
async function _asyncFunction() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("hello saud !!");
    });
    let val = await myPromise;
    console.log(val)
  }
  
  _asyncFunction();
