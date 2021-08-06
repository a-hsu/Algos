const checkPermutation = require("./index.js")

test("returns FALSE if s1 IS NOT a permutation of s2 ", () => {
    expect(checkPermutation("hello!", "hello")).toBe(false)
    expect(checkPermutation("password", "username")).toBe(false)
    expect(checkPermutation("abc", "123")).toBe(false)
    expect(checkPermutation("howdypartner", "there's a snake in my boot")).toBe(
        false
    )
    expect(checkPermutation("char", "chariot")).toBe(false)
})

test("returns TRUE if s1 IS a permutation of s2", () => {
    expect(checkPermutation("Mindsight", "mindSight")).toBe(true)
    expect(checkPermutation("tommarvoloriddle", "iamlordvoldemort")).toBe(true)
    expect(checkPermutation("hello", "olleh")).toBe(true)
    expect(checkPermutation("waterfall", "waterfall")).toBe(true)
})
