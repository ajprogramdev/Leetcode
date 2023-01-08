

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

/*
Write a function factorArray(array, number) that takes in an array of 
numbers and a number and returns an array of all the factors.

Examples:
factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []

Approach:
1.Edge cases
2.Create an empty array for the factors.
3.Loop through array
    Check if the arr[index] is perfect division by the number,
    if it is, push to array.  
4.return Array.
*/
function factorArray(array, number) {
    const factors = [];
    for (let i=0; i < array.length; i++) {
        if (number % array[i] === 0){
            factors.push(array[i]);
        }
    }

    return factors;
}
console.log(factorArray([2,3,4,5,6],20)); // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)); // => [5]
console.log(factorArray([10,15,20,25],5)); // => []

/*
Write a function oddRange(end) that takes in a number and 
returns an array containing all positive odd numbers up to end.

Examples:
oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6);  // => [ 1, 3, 5 ]

Approach:
1.Edge Cases
2.Create an array to store the odd numbers.
3.Loop through array
    if arr[i] % 2 === 1 push index into array of odds.
4.Return the odd numbers array.
*/
function oddRange(end) {

    const arrOdd = [];
    for (let i=1; i <= end; i++) {
        if (i % 2 === 1) {
            arrOdd.push(i);
        }
    }
    return arrOdd;
}
console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]

/*
Write a function reverseHyphenString(string) that takes in a hyphenated string and returns 
a the hyphenated string reversed.

Examples:
reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"

Approach:
1.Edge Cases
2.Split string by "-" into an array.
3.Reverse the array.
4.Join the array adding "-" between.
5.return the string
*/
function reverseHyphenString(string){

    return string.split("-").reverse().join("-");
}
console.log(reverseHyphenString("Go-to-the-store")); // => "store-the-to-Go"
console.log(reverseHyphenString("Jump,-jump-for-joy")); // => "joy-for-jump-Jump,"

/*
Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing 
the elements common to both arr1 and arr2.

Examples:
intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []

Approach:
1.Create a hashmap for storing each value in the array.
2.Loop through one of the arrays, storing its value in the hashmap if it doesnt exist.
3.Loop through second array and verify if the values exist in hasmap, 
    if they exist add them to a new array.
4.return the new array.
*/
function intersect(arr1, arr2) {
    const hashMap = {};
    const commonsArr = [];
    for (let i=0; i < arr1.length; i++) {
        if (!hashMap.hasOwnProperty(arr1[i])) {
            hashMap[arr1[i]] = i;
        }
    }

    for (let i=0; i < arr2.length; i++) {
        if (hashMap.hasOwnProperty(arr2[i])) {
            commonsArr.push(arr2[i]);
        }
    }

    return commonsArr;
}

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])); // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])); // => []

/*
Write a function mirrorArray(array) that takes in an array as 
an argument and returns a new array "mirrored" as shown in the examples:

Examples:
mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

Approach:
1.Join an array with the same array but reversed.
2.Create a new array of the argument array.
3.Add spread argument array to the new array but reversed.
4.return new array.
*/

function mirrorArray(array){
    return [...array,...array.reverse()];
}

console.log(mirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

/*
Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence 
where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. 
Feel free to use the array below in your 
solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:
abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'

Approach:
1.Edge Cases
2.Split each string into words.
3.split each word into an array,
    if the length >= 4 loop through the word and check if the letter exists, if it doest remove it, add to new string.

*/
function abbreviate(sentence) {
    const vowels = {
        'a':'a',
        'e':'e',
        'i':'i',
        'o':'o',
        'u':'u'
    }
    const words = sentence.split(' ');

    for (let i=0; i < words.length; i++) {
        if (words[i].length >= 4) {
            const letters = words[i].split('');
            let word = "";
            for (let x=0; x < letters.length; x++) {
                if (!vowels.hasOwnProperty(letters[x])){
                    word += letters[x];
                }
            }
            words[i] = word;
        }
    }

    return words.join(' ');
}
console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'