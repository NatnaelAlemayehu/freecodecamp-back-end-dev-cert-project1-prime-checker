function isPrime(num){
// Validate input: must be a finite integer
    if (typeof num !== 'number' || !Number.isInteger(num) || !Number.isFinite(num)) {
        throw new Error("Input must be a finite integer.");
    }

    // Handle edge cases: numbers less than 2 are not prime
    if (num < 2) return false;

    // 2 and 3 are prime
    if (num === 2 || num === 3) return true;

    // Even numbers greater than 2 are not prime
    if (num % 2 === 0) return false;

    // Check divisibility up to sqrt(num)
    const limit = Math.floor(Math.sqrt(num));
    for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

module.exports = {isPrime};