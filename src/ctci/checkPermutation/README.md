# checkPermutation

`function isUnqiue(s){}`

### Examples



### Approaches

- Brute force - store every element of s2 into a hash table, and loop through s1, decrementing the value of the found key at each point. If the value decreases below 0 or if the value is not found, then you do not have a permutation. If you reach the end, you found a permutation.
- Sort both strings, and traverse each index. If there is a discrepancy, you do not have a permutation.
