

/*
Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, 
inclusive. Inclusive means that the range includes lowNum and highNum.

Example:
logBetween(-1, 2);  // => [-1, 0, 1, 2]
logBetween(14, 6);  // => []
logBetween(4, 6);  // => [4, 5, 6]

Approach:
1.Create the storing Array.
2.Verify edge cases:
            low > high return []
3.Loop size between low and high
            push index into arry.
4.return result.
*/
function logBetween(lowNum, highNum){
  
    const numsArr  = [];
   if (lowNum > highNum) {
       return [];
   }
    
    for (let i=lowNum; i <= highNum; i++) {
     numsArr.push(i); 
    }
    
    
    return numsArr;
  }
  
console.log(logBetween(-1, 2));

/*
logBetweenStepper
Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. 
The function should return an array of numbers between min and max at step intervals.

Examples:
logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]

Approach:
1.Create numbers array.
2.Push initial min into array.
2.Edge Cases
3.Loop size between min and max.
         i = i + step;
         i < max, push i to array.
         i > max, push max to array, return array.
4.Return array.        
*/
function logBetweenStepper(min, max, step) {

    const numArr = [];
    numArr.push(min);
   
    let i = min;
     while (i < max){
      i = i + step;
       if (i > max){
             numArr.push(max);
             return numArr;
         }  
        numArr.push(i);
       
     }
     
     return numArr;  
 }

console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15])

/*
Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), 
in reverse order.

Examples:
printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [93, 92, 91]

Approach:
1.Create an array to store the numbers.
2.Edge cases
3.For loop count none inclusive starting with max ending with min
                push to num array.
4. Return array
*/

function printReverse(min, max) {
    const numArr = [];

    for (let i=max-1; i > min; i--) {
        numArr.push(i);
    }

    return numArr;
}

console.log(printReverse(13, 18));// => [17, 16, 15, 14]
console.log(printReverse(90, 94)); // => [93, 92, 91]

/*
Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max 
that is divisible by either 3 or 5, but not both.

Examples:
fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]

Approach:
1.Create an array to store the numbers.
2.Edge Cases
    -Max is exclusive.
3.For loop between index=0 <= max
            Check if divisible by both 3 and 5 if is skip, 
             if not divisible, check if divisible by each.
4.return the array.
*/

function fizzBuzz(max) {
    const numArr = [];

    for (let i=0; i < max; i++) {
        const three = i % 3;
        const five = i % 5;
        if (three === 0 && five === 0) {
            continue;
        } else if (five === 0){
            numArr.push(i);
        } else if (three === 0) {
            numArr.push(i);
        }
    }

    return numArr;
}
console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

/*

isPrime
Define a function isPrime(number) that returns true if number is prime. Otherwise, false. 
Assume number is a positive integer.

Examples:
isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true

Approach:
1.Edge Cases.
    A prime number is a number that can only be perfectly divided by itself and 1.
    whole number greater than 1 that cannot be exactly 
    divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).
    -if the number is 2 is true.

2.check if the number is a perfect division by 2.

*/

function isPrime(number) {
    for (let i=2; i<number; i++) {
        if (number % i == 0){
            return false;
        }
    }  
     return true;
}
 
console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true

/*
Write a function maxValue(array) that returns the largest value in array. 
Assume array is an array of numbers.

Examples:
maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43

Approach:
1.Edge Cases
    Is the array ordered? get last value.
    If empty return null
2.Create a max value variable with the first array value.
3. Loop through the values starting at second index
    compare arr[index] with max value, store the highest.  
3. return the value.
*/
function maxValue(array){

    if (array.length < 1) {
        return null;
    }
    let highNum = array[0];
    for (let i = 1; i < array.length; i++) {

        if (array[i] > highNum) {
            highNum = array[i];
        }

    }

    return highNum;
}

console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43


/*
Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. 
It should return the index value of the target if it is present in the array or -1 if it is not present.

CONSTRAINT: Do not use the indexOf or includes method

Examples:
myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1

Approach:
1.Edge Cases
    Is the array in order? Yes
    Do values repeat themselves? No
2. Implement Binary Search.
3.return value.
*/

function myIndexOf(array, target){

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid;
    }

    if (val < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return -1;
}