

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