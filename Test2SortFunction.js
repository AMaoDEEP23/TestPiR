// Task: Write a JavaScript function that sorts an array of numbers in ascending order, but places all odd numbers before even numbers.
// Example: 
// Input: [4, 2, 5, 7, 1, 6], Output: [1, 5, 7, 2, 4, 6].
// Input: [25, 40, 14, 91, 31, 22, 49, 13, 6], Output: [13, 25, 31, 49, 91, 6, 14, 22, 40].
 
function sortOddEven(arr) {
    
    arr.sort((oddNum, evenNum) => {
        
        if (oddNum % 2 !== 0 && evenNum % 2 !== 0) {
            return oddNum - evenNum; 
        } else if (oddNum % 2 === 0 && evenNum % 2 === 0) {
            return oddNum - evenNum; 
        } else if (oddNum % 2 !== 0) {
            return -1; 
        } else {
            return 1; 
        }
    });
    return arr;
}

console.log(sortOddEven([4, 2, 5, 7, 1, 6])); //Output: [1, 5, 7, 2, 4, 6].
console.log(sortOddEven([25, 40, 14, 91, 31, 22, 49, 13, 6])); //Output: [13, 25, 31, 49, 91, 6, 14, 22, 40].


