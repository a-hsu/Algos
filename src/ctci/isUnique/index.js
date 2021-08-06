function isUnique(s) {
  // Time Complexity - nlog(n)
    s = s.toLowerCase().split("").sort()
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            return false
        }
    }
    return true
}
module.exports = isUnique
