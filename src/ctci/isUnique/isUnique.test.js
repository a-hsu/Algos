const isUnique = require("./index.js")

test("returns FALSE if string does not have unique characters ", () => {
    expect(isUnique("lampapalooza")).toBe(false)
    expect(isUnique("112233")).toBe(false)
    expect(isUnique("abcABC")).toBe(false)
})
test("returns TRUE if string has unique characters ", () => {
    expect(isUnique("computer")).toBe(true)
    expect(isUnique("Olympics")).toBe(true)
    expect(isUnique("tacos")).toBe(true)
    expect(isUnique("foil")).toBe(true)
})


