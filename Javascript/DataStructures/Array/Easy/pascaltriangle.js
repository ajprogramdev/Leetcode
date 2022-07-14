/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

/*
Steps:
1.Eliminate the first 2 edge cases, if numRows === 1 return [1] if numRows === 0  return [].
2.Since numRow > 1, create triangle array with first 2 rows.[[1],[1,1]].
3.Loop through array given the number of Rows, start index at 2.
    4.Add first triangle[index] = 1;
    5.Loop through the array, before current array.(index-1)
    6.Then sum left with right, push to array.
    7.Add last triangle[index].push(1);
8.Return triangle array.
*/


/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {    
    if (numRows === 1) {
        return [[1]];
    }
    if (numRows === 0) {
        return [];
    }      
    let triangle = [[1],[1,1]];
    
    for (let i=2; i < numRows; i++) {
        triangle[i] = [1];
        
        for (let x=0; x < triangle[i-1].length; x++) {
            
            if (triangle[i-1][x+1]) {
                let sum = (triangle[i-1][x] + triangle[i-1][x+1]);
                triangle[i].push(sum);
            }                   
        }   
        triangle[i].push(1);        
    }  
    return triangle;   
};