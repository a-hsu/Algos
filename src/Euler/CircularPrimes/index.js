function summationOfPrimes(max) {
    const primes = new Array(max).fill(true)
    primes[0] = false
    primes[1] = false
    for (let i = 2; i < Math.sqrt(max); i++) {
        if (primes[i]) {
            for (let j = i * i; j < max; j += i) {
                primes[j] = false
            }
        }
    }
    let sum = 0
    for (let i = 2; i < primes.length; i++) {
        if (primes[i]) {
            sum += i
        }
    }
    return sum
}

module.exports = summationOfPrimes
