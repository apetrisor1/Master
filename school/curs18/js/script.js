// var emptyObject = {};
// var emptyObject2 = new Object();

var user = {
  name: 'Adi Petrisor',
  age: 29,
  height: 165,
  weight: 55,
  sayHi: function() {
    console.log('Hi there');
  },
  sayHiTo: function(name) {
    console.log('Hi there ' + name);
  },
  'eyes color': 'Brown'   // this kind of notation for keys, with more than 1 word, is accesed with user['composite word']
}


console.log(user);
user.sayHi();
user.sayHiTo('Mihai');
console.log(user.name);
console.log(user['eyes color']);


// Accesare dinamica a proprietatilor   VERY IMPORTANT!!
var prop = 'height';
console.log(user[prop]);
prop = 'age';
console.log(user[prop]);
prop = 'eyes color';
console.log(user[prop]);

// constructor function
function User(options) {
  this.name = options.name || "";
  this.age = options.age || "";
}

var colleague = new User({
  name: 'mitza',
  height: 175,
  weight: 75  
})


$(domLoaded);
function domLoaded() {
  

}

