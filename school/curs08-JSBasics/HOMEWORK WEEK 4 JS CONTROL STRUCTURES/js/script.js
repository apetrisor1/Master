// HOMEWORK WEEK 4


// Javascript Control Structures
// Using control structures, do the following:

//1. display in the console the numbers from 1 to 20
//2. display in the console the odd numbers from 1 to 20
//3. compute the sum of the elements of an array and display it in the console
//4. compute the maximum of the elements of an array and display it in the console 
//5. compute how many times a certain element appears in an array


// 1. display in the console the numbers from 1 to 20
// BAD WAY
// @comment - way the better way is better. I expect an answer :)
var line = " ";
for(var i = 1; i <= 20; i++)
  {
    line = line.concat(i,' ');
  }
console.log('1 : Numbers from 1 to 20 are' + line);

// BETTER WAY
var values = [];
for(var i=1; i<=20;i++)  // @comment - always add {} even you have just one line, it can prevent many errors
      {
        values.push(i);
      }
console.log('1 : Numbers from 1 to 20 are', values);


// 2. display in the console the odd numbers from 1 to 20
// BAD WAY
var line = " ";
for(var i = 1; i <= 20; i++)
  {
    if(i%2 !==0) {
      line = line.concat(i,' ');
    }
  }
console.log('2 : Odd numbers from 1 to 20 are:' + line);

// BETTER WAY 
var values = [];
for(var i = 1; i <= 20; i++)
    {
      if(i%2 !== 0){
               values.push(i);
     }
    }
console.log('2 : Odd numbers from 1 to 20 are: ', values);


// 3.1 compute the sum of the elements of an array and display it in the console
var sum = 0;
var firstNumber = prompt("3. Sum of numbers in sequence: Enter the first number");
var lastNumber = prompt("3. Sum of numbers in sequence: Enter the last number");
firstNumber = parseInt(firstNumber, 10);
lastNumber = parseInt(lastNumber, 10);
if(firstNumber<=lastNumber)  {
    for(var i = firstNumber; i <= lastNumber; i++)
    sum += i;
  }else {
      for(var i = lastNumber; i<= firstNumber; i++)
      sum += i;
    }
console.log('3.1 :  Sum of numbers from', firstNumber, 'to', lastNumber, 'is', sum);


// 3.2. compute the sum of the elements of an array and display it in the console
var sum = 0;
var array = [ 25, 6, 11238, 102, 12893, 11236, -50]
for(var i = 0; i<array.length; i++)
  sum += array[i];
console.log('3.2 :  Sum of numbers in array', array, 'is', sum);


// 4. compute the maximum of the elements of an array and display it in the console
// @comment - max can take the first elem from the array and then pars the array from second position
var max = -Infinity;
var array = [ 25, 6, 11238, 102, 12893, 11236, -50]
for(var i = 0; i < array.length; i++)
  if(array[i] > max){
    max = array[i];
  }
console.log('4 : The largest number in array', array, 'is', max);


// 5. compute how many times a certain element appears in an array
var counter = 0;
var intruder = 3;
var array = [3, 5, 6, 7, 3, 17, 2, 3];
for(var i = 0; i < array.length; i++)
  if(array[i] === intruder)
    {
      counter++;
    }
console.log('5 : The number', intruder, 'appears in array',array,'',counter, 'times');









