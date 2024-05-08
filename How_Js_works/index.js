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