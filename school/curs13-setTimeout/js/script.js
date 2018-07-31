// FUNCTIONS EXECUTE STRAIGHT AWAY
var x = 2;
var result1 = sum(x,4);
console.log(result1);
function sum(a,b){
  return a+b;
}


// Setting a timer on a function  VERY IMPORTANT!!!!!!!!
setTimeout(function(){
  var result3 = sum(x,5);
  console.log(result3);
},3000);

var result2 = sum(x,3);
console.log(result2);
