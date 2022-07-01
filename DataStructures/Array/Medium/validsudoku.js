/*
Determine if a 9 x 9 Sudoku board is valid. 
Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 
Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
*/

/*
Steps:
1. Create a Set to track row, columns and box value.
2. Create 2 nested For loops that run 9 times. 
    4. Create a varible that holds the index value.
    5. Check if the value exists in row, column or box.
        6.If true return false.
        7.Else add row column and box to set.
8.Return true if never returned false.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    
    const set = new Set();
   
    for (let i=0; i < 9; i++) {    
        for (let x=0; x < 9; x++) {
          const value = board[i][x];  
          if (value !== ".") {
             if (set.has(`Row: ${i} , Value: ${value}`) 
                 || set.has(`Column: ${x} , Value: ${value}`) 
                 || set.has(`${value} at box ${Math.floor(i/3)}, ${Math.floor(x/3)}`)) 
             {     
                return false;                
             } else {                
                 set.add(`Row: ${i} , Value: ${value}`);
                 set.add(`Column: ${x} , Value: ${value}`);
                 set.add(`${value} at box ${Math.floor(i/3)}, ${Math.floor(x/3)}`);    
             }             
          }            
        }       
    }
    
    return true;
};