// Task: Implement a JavaScript function that, given an array of integers and a target integer, returns whether any two integers in the array sum up to the target number.
// Example: 
// Input: [1, 3, 5, 7, 16, 4], Target: 8, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 12, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 18, Output: false.
// Input: [12, 17, 14, 11, 19, 8], Target: 20 Output: true.
// Input: [12, 17, 14, 11, 19, 8], Target: 30 Output: false.

function sumTwo(arr, target){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){ 
                return true;
            }
        }
    } 
    return false;
}

// Test cases
console.log(sumTwo([1, 3, 5, 7, 16, 4], 8));   // Output: true
console.log(sumTwo([1, 3, 5, 7, 16, 4], 12));  // Output: true
console.log(sumTwo([1, 3, 5, 7, 16, 4], 18));  // Output: false
console.log(sumTwo([12, 17, 14, 11, 19, 8], 20));  // Output: true
console.log(sumTwo([12, 17, 14, 11, 19, 8], 30));  // Output: true
