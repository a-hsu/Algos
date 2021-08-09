function palindromePermutation(s) {
    let letters = {}

    for(let letter in s){
      if(letters[letter]){
        letters[letter]++
      } else
      letters[letter] = 1
    }
    let foundOdd = false
    for(let i = 0; i < Object.keys(letters).length; i++){
      if(letters[Object.keys(letters)[i]] % 2 != 0 ){
        if(foundOdd)
          return false;
        else
          foundOdd = true;
      }
    }
    return true

    let isPalindromePermutation = true
    s = s.split(" ").join("").split("").sort()
    let foundSingle = false
    for (let i = 0; i < s.length - 1; i++) {
        console.log(i)
        if (s[i] === s[i + 1]) {
            i += 1
        } else {
            if (s.length % 2 == 0 || foundSingle) {
                return false
            } else {
                foundSingle = true
            }
        }
    }

    return isPalindromePermutation

    // returns true or false
}
module.exports = palindromePermutation
