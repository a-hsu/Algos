function urlify(s, length) {
    // Time Complexity: O(n)

    const arr = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            continue
        }
        let j = i
        while (s[j] != " " && j < s.length) {
            j++
        }

        arr.push(s.substring(i, j))
        i = j
    }
    const res = arr.join("%20")
    console.log(res)
    return res
}
module.exports = urlify
