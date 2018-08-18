// correct way

function Customer(name,gender,height,weight) {
  this.name= name;
  this.gender= gender;
  this.height= height;
  this.weight= weight;
  this.computeBMI = function() {
      return this.weight/(this.height*this.height);
  };
  this.bmi = this.computeBMI();

  
  this.show = function(){
     if(this.bmi<18.5)
       {
            console.log ( this.name + ' | ' + this.gender + ' | ' + this.bmi + ' | ' + "Underweight" );       
       }
      else if(this.bmi<25)
       {
            console.log ( this.name + ' | ' + this.gender + ' | ' + this.bmi + ' | ' + "Normal Weight" );   
       }
          
      else if(this.bmi<30)
        {
          console.log ( this.name + ' | ' + this.gender + ' | ' + this.bmi + ' | ' + "Overweight" );
        }
      else console.log ( this.name + ' | ' + this.gender + ' | ' + this.bmi + ' | ' + "Obese" );
      console.log("");
  };
}

var customerArray = [];
customerArray.push(new Customer("John Doe","M",1.8,82));
customerArray.push(new Customer("Miskath Kalman","M",1.6,81));
customerArray.push(new Customer("Missy Elliot","F",1.55,63));
customerArray.push(new Customer("Kendrick Llamar","M",2,95));
customerArray.push(new Customer("Root de Problema","F",1.75,55));

customerArray.forEach(function(customer){
                        customer.show();
                      });



// BAD WAY

// // CUSTOMER 1
// var customer1 = {
//   name: "John Doe",
//   gender: "M",
//   height: 1.8,
//   weight: 82,
//   BMI: function(height,weight)
//   {
//     var index = weight/(height*height);
//     console.log("Body Mass Index: ",index);
//     if(index<18.5)
//         console.log("Underweight");
//     else if(index<25)
//         console.log("Normal weight");
//     else if(index<30)
//         console.log("Overweight");
//     else console.log("Obese");
//   }
// };

// // CUSTOMER 2
// var customer2 = {
//   name: "Mary Ann",
//   gender: "F",
//   height: 1.65,
//   weight: 55,
//   BMI: function(height,weight)
//   {
//     var index = weight/(height*height);
//     console.log("Body Mass Index: ",index);
//     if(index<18.5)
//         console.log("Underweight");
//     else if(index<25)
//         console.log("Normal weight");
//     else if(index<30)
//         console.log("Overweight");
//     else console.log("Obese");
//   }
// };


// // CUSTOMER 3
// var customer3 = {
//   name: "Miskath Kalmann",
//   gender: "M",
//   height: 1.7,
//   weight: 90,
//   BMI: function(height,weight)
//   {
//     var index = weight/(height*height);
//     console.log("Body Mass Index: ",index);
//     if(index<18.5)
//         console.log("Underweight");
//     else if(index<25)
//         console.log("Normal weight");
//     else if(index<30)
//         console.log("Overweight");
//     else console.log("Obese");
//   }
// };

// console.log(customer1.name);
// console.log(customer1.gender);
// customer1.BMI(customer1.height,customer1.weight);
// console.log("");
// console.log(customer2.name);
// console.log(customer2.gender);
// customer2.BMI(customer2.height,customer2.weight);
// console.log("");
// console.log(customer3.name);
// console.log(customer3.gender);
// customer3.BMI(customer3.height,customer3.weight);















