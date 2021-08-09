const palindromePermutation = require("./index.js")

test("returns FALSE if string is not a permutation of a palindrome", () => {
    expect(palindromePermutation("lampapalooza")).toBe(false)
    expect(palindromePermutation("abcdefg")).toBe(false)
    expect(palindromePermutation("212233")).toBe(false)
})

test("returns TRUE if string is a permutation of a palindrome", () => {
    expect(palindromePermutation("112233")).toBe(true)
    expect(palindromePermutation("racecar")).toBe(true)
    expect(palindromePermutation("rraacce")).toBe(true)
    expect(palindromePermutation("taoc tac")).toBe(true)
})
