function checkPermutation(s1, s2) {
    //Time Complexity: O(n + m) where n is the length of s1 and m is the length of s2
    if (s1.length !== s2.length) return false

    const stringCache = {}
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    for (let i = 0; i < s2.length; i++) {
        // If stringCache[s2[i]] exists, add one to it. Otherwise, initialize it at 1
        stringCache[s2[i]] = stringCache[s2[i]] ? stringCache[s2[i]] + 1 : 1
    }

    for (let i = 0; i < s1.length; i++) {
        if (!stringCache[s1[i]]) {
            return false
        } else {
            stringCache[s1[i]]--
        }
    }
    return true
}

// function checkPermutation(s1, s2) {
//     // Time Complexity: nlogn time
//     if (s1.length !== s2.length) {
//         return false
//     }
//     s1 = s1.toLowerCase().split("").sort()
//     s2 = s2.toLowerCase().split("").sort()

//     // Javascript Every Array Function
//     // return s1.every((letter, index) => {
//     //     return letter === s2[index]
//     // })

//     // This also works...
//     // var sortedStringOne = stringOne.split('').sort().join('');
//     // var sortedStringTwo = stringTwo.split('').sort().join('');
//     // return sortedStringOne === sortedStringTwo;

//     let idx = 0

//     while (idx < s1.length) {
//         if (s1[idx] === s2[idx]) {
//             idx++
//         } else {
//             return false
//         }
//     }
//     return idx === s1.length
// }
module.exports = checkPermutation
