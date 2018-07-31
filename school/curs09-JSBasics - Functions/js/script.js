// Draw one star on line 1, two on line 2, three on line 3, four on line 4
var index = 1;
var result = [];
while(index <= 4)
  {
    result.push(" * ");
    console.log(result);
    index++; 
  }


// STATEMENT FUNCTION
function statementFunction(){
  console.log("Hello");
}
statementFunction();


// Exp function * Same thing as above, syntax different
var expFunction = function() {
  console.log("Expression function");
}

expFunction();


// Self executing anonymous function = immediately invoked function = self invoked function.
(function() {
  console.log("Immediately invoked function");
})();


// Function with another function as parameter. First function sent to the second function as parameter, second function calls function on call.
function containedFunction() {
  alert("Exec from another function");
}
function containsFunction (f) {
  f();
}
containsFunction(containedFunction);


//SCOPE of variables

// Global variables
var a = 1;      // global . Outside of functions, using "var" doesnt matter, variable is still global
b = 2;          // global
window.c = 3;
//  --------------


function displayVariables(){
  var d = 4;   // local because of "var"
  e = 5;       // global
  console.log(d);
  console.log(e);
}

displayVariables();
//console.log(d);   // this will not work because d is declared as local inside displayVariables function
console.log(e);     // this will work because e is declared as global inside displayVariables function


// Closure

var x = 1; // global scope
function firstF(){
  var y = 2; // local in first function
  console.log("first x = ", x); // 1
  console.log("first y = ", y); // 2
  //console.log("first z = ", z); // undefined
  function secondF(){
    var z = 3; // local in second function
    console.log("first z = ", z); // 3
    k = 4; // declared globally inside this function.
  }
  secondF();
}

firstF();
console.log("k", k);
console.log("first x =", x);  // 1
// console.log("first y = ", y); // undefined
// console.log("first z = ", z); //undefined
































