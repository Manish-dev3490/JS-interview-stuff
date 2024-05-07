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




// Let const in javascript temporaral dead zone \
console.log(b);
let a=10;
console.log(a);

var b=10;
