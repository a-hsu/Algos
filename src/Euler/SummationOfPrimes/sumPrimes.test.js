const summationOfPrimes = require("./index.js")

test("What is the sum of primes below 30?", () => {
    expect(summationOfPrimes(30)).toBe(129)
})
test("What is the sum of primes below 100?", () => {
    expect(summationOfPrimes(100)).toBe(1060)
})
test("What is the sum of primes below 1000000?", () => {
    expect(summationOfPrimes(2000000)).toBe(142913828922)
})

