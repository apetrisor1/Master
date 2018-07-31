//string
var personString = '{ "name": "mihai", "age": 25, "gender": "M" }' 
// ghilimele mici afara, mari inauntru



//object
var person =                                  
    {
      name: 'adrian',
      age: 25,
      gender: 'M'
    }



// VERY IMPORTANT    ||    SERIALIZARE, DESERIALIZARE


// transformarea stringului in format JSON se face cu JSON.parse       = serializare
var convertedPersonString = JSON.parse(personString);
console.log("Age of Mihai is: ", convertedPersonString.age);

// si invers                                                           = deserializare
var convertedPersonObjectToString = JSON.stringify(person);
console.log(convertedPersonObjectToString);