

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