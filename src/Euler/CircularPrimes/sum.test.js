const summationOfPrimes = require("./index.js")

test("How many primes are there below 30?", () => {
    expect(summationOfPrimes(30)).toBe(129)
})
test("How many primes are there below 100?", () => {
    expect(summationOfPrimes(100)).toBe(1060)
})
test("How many primes are there below 1000000?", () => {
    expect(summationOfPrimes(2000000)).toBe(142913828922)
})

