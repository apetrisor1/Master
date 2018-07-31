// define parent / a.k.a. superclass
function Animal(options) {
  // this is used to avoid errors when calling a new animal with no parameter.
  options = options || {};
  this.name = options.name;
  this.color = options.color;
  this.weight = options.weight;
  this.legs = options.legs;
}

Animal.prototype.eat = function() {
  console.log('om nom nom nom');
}

Animal.prototype.speak = function() {
  console.log('hello! animal be speaking');
}

//define childclass / subclass
function Dog(options) {
  Animal.call(this, {legs: 4});
}

var nero = new Dog({name: 'nero'});
console.log(nero);


Dog.prototype = Object.create(Animal.prototype);






$(domLoaded);

function domLoaded() {
  
 
}

