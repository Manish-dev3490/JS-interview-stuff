// Lets look into the call stack , excecution context and how js works behind the scenes
// var a=10;
// function square(num){
//     var answer=num*num;
//     return answer;
// } 
// var squareOne=square(2);
// var squaretwo=square(a);


// just look at hoisiting
console.log(a);
getName();

var a=10;
function getName(){
    console.log("namastey javascript");
}

