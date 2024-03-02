// Task: Given a list of non-negative integers, arrange them such that they form the largest possible number.
// Example
// Input: [10, 2, 13, 7], Output: "721310".
// Input: [21, 36, 8, 45], Output: “8453621”

function largestNumber(nums) {
nums.sort((a, b) => `${b}${a}` - `${a}${b}`); 
// console.log(nums);
return nums[0] === 0 ? ''+nums[0] : nums.join('');

}
console.log(largestNumber([10, 2, 13, 7])); // Output: "721310"
console.log(largestNumber([21, 36, 8, 45])); // Output: "8453621"
