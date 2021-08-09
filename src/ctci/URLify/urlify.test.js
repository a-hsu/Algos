const urlify = require("./index.js")

test("returns a string with whitespace replaced with %20", () => {
    expect(urlify("pokemon master", 14)).toBe("pokemon%20master")
    expect(urlify("dragon ball z  ", 13)).toBe("dragon%20ball%20z")
    expect(urlify("   my hero   academia ", 16)).toBe("my%20hero%20academia")
})
