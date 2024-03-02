// Task: Write a JavaScript function that takes a number n and returns the sum of all prime numbers up to and including n.
// Example: 
// Input: 10, Output: 17 (since the prime numbers up to 10 are 2, 3, 5, 7).
// Input: 59, Output: 440 (since the prime numbers up to 10 are 2, 3, 5, 7….. To 59).

function sumAllPrimes(num) {
    let total = 0;

    function checkPrime(i){   
        for (let j = 2; j < i; j++) {  
        if(i % j === 0){
            return false;
            }
        }
        return true;
    }
    
    for (let i = 2; i <= num; i++) { 
        if (checkPrime(i)) {
            total += i;
        }
        
    }
    return total
}

console.log(sumAllPrimes(10)); //Output: 17 
console.log(sumAllPrimes(59)); //Output: 440