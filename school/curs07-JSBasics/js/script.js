// Play with literals (values)
console.log("Number ", 12);
console.log("String ", 'Anca');

// Play with variables
var age = 20;
console.log("Age = ", age);

var name = "Anca";
console.log("Name = ", name);

var isTrue = true;
var isFalse = false;
console.log("IsTrue = ", isTrue);
console.log("IsFalse = ", isFalse);
console.log("IsTrue = ", isTrue, "IsFalse = ", isFalse);

var thisIsNull = null;
console.log("thisIsNull = ", thisIsNull);

var thisIsNotDefined;
console.log("thisIsNotDefined = ", thisIsNotDefined);

// Operators
console.log("Sum = ", 2 + 2);
var a = 10;
var b = 4;
var c = a - b;
console.log("Diff = ", c);

console.log("Compare ", 2 > 0);
console.log("Compare ", 0 <= 2);

console.log("Logical &&", 2 > 0 && 0 > 2);
console.log("Logical ||", 2 > 0 || 0 > 2);
var logical = (0 > 2);
console.log("Logical !", !logical);

var fname = "Anca";    
var lname = "BALC";
var name = fname + " " + lname; // concat
console.log("Name = ", name);

// Array
// Empty array
var a = [];
console.log("a = ", a);

var a = ["Ana", "Ion"];
console.log("a = ", a);
console.log("a length ", a.length);

// Add new value
a.push("Gheorghe");
a.push(50);
a.push([10]);

console.log("a = ", a);
console.log("a = ", a[4]); // -> [10]
console.log("a = ", a[4][0]); // -> 10







