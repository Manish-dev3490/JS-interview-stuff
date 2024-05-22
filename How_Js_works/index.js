// Lets look into the call stack , excecution context and how js works behind the scenes
// var a=10;
// function square(num){
//     var answer=num*num;
//     return answer;
// }
// var squareOne=square(2);
// var squaretwo=square(a);


// just look at hoisiting
// console.log(a);
// getName();

// var a=10;
// function getName(){
//     console.log("namastey javascript");
// }


// How Functions works in javascript scope and scope chaining and lexical enviorment
// function xyz(){
// console.log(a);
// function z(){
//     console.log(a);
// }
// z();
// }

// var a=10;
// xyz();
// console.log(a);




// Let const in javascript temporaral dead zone
// console.log(b);
// let a=10;
// console.log(a);

// var b=10;


// Relations between let const and var

// var a=10;
// console.log(a);

// var a=100;


// Type error with const
// const a;
// a=10;



// Block scope

// Example 1
// {
//     var a=10;
// }
// function printA(){
//     console.log(a);
// }
// printA();


// Example 2
// {
//     var a=10;
//     let b=10;
//     const c=10;
// }


// Shadowing in Javascript with var
// var a=10;
// var a=undefined;
// console.log(a);

// Shadowing in Javascript with let
// {
//     let a=20;
//     var b=30;
//     const c=40;
//     console.log(b);
//     console.log(c);


// }

// console.log(a);


// Some practice for closurs

// function a(){
//     var b=1;

//    return function bb(){
//         function c(){
//             console.log(b);
//         }

//         return c;
//     }

// }
//  var aaaa=a();
//  var bbb=aaaa();
//  bbb();

// function aala(){
//     let a=10;

//    return function baba(){
//         console.log(a);
//     }
// }

// var chacha=aala();
// chacha();



// let print =()=>{
//     console.log("hello");
// }
// print();



// Settime out + closure
// function printOnetoFive(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }

//     console.log("namastey  javascript");
// }

// printOnetoFive();


// function outer() {
//     var a = 10;
//     return function inner() {

//         return function nestedInner() {
//             return function DEEP() {
//                 console.log(a);
//             }
//         }

//     }
// }
// outer()()()();

// Higher order Functions 

// const radius=[2,3,4,5];

// const area=function (radius){
//     return Math.PI*radius*radius
// }

// const diameter=function (radius){
//     return 2 * radius
// }

//  Array.prototype.calculate=function (logic){
//     const output=[];
//     for (let index = 0; index < this.length; index++) {
//         output.push(logic(this[index]))        
//     }
//     return output;
// }

//  console.log(radius.calculate(area));
// //  console.log(radius.map(area))
//  console.log(radius.calculate(area));

// creating the promises 

// const cart=["shoes","jeans","mobiles"];

// const createOrderid = function (cart){
//     const pr= new Promise(function(resolve,reject){
//         const orderId=12345;
//         if(cart){
//             resolve(orderId)
//         }
//         else {
//             const error=new Error()
//             reject(error)
//         }



//     })
//     return pr;
// } 

// createOrderid(cart).then((result) => {
//     console.log(result);

// }).catch((err) => {
//     console.log(err);

// });


// const cart2=["samsung s52","activa 5g","jbl speaker"];

// const createOrder=(cartItems)=>{
//   return pr=new Promise(function(resolve,reject){
//     if(!cartItems){
//         reject("Your Cart is not available "+Error);
//     }
//     else {
//         const orderId=12345;
//         setTimeout(()=>{
//         resolve(orderId)

//         },3000)
//     }

//    })

// }
// console.log(createOrder(cart2));


// Practicing Promise 
// const cart = ["jeans", "shorts", "shirts"];

// function createOrder(cart) {
//     const promise = new Promise(function (resolve, reject) {
//         const orderId = 12345;
//         if (cart.length>0) {
//             setTimeout(() => {
//                 resolve({
//                     orderId:orderId,
//                     message:"You have created your order succesfully with this order  id "+orderId
//                 })

//             }, 3000)
//         }
//         else {
//             const error = new Error
//             reject(error)
//         }

//     })
//     return promise;
// }

// function makePyment(orderid){
//     return payment = new Promise(function(resolve,reject){
//         if(orderid){        
//             setTimeout(()=>{
//                 resolve({
//                     message:"your payment is successfully created",
//                     orderI:orderid
//                 })
//             },6000) 

//         }

//         else {
//             const error = new Error

//             reject(error);
//         }
//     })
// }


// createOrder(cart).then((data)=>{
//     console.log(data.message);
//     return data;
// }).catch(()=>{
//     console.log("You have error in create order");
// }).
// then((data)=>{
//    return makePyment(data.orderId);
// }).then((paymentData)=>{
//     console.log(paymentData.message);

// }).catch(()=>{
//     console.log("you have error in make payment");
// })



// promise Apis promise.all/settled/race/any

// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("p1 reject")

//     }, 5000)
// })

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         reject("p2 reject")

//     }, 1000)
// })

// const p3 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve("p3 resolved")

//     }, 3000)
// })


// Promise.all([p1, p2, p3]).then((response) => {
//     console.log(response);
// }).catch((err)=>console.log(err));

const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("p1 reject")

    }, 5000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("p2 reject")

    }, 1000)
})

const p3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("p3 resolved")

    }, 3000)
})


Promise.allSettled([p1, p2, p3]).then((response) => {
    console.log(response);
}).catch((err)=>console.log(err));

