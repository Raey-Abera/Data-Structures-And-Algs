// https://leetcode.com/problems/two-sum/

const twoSum = (numbers, target) => {
    let numberIndex = new Map()
    let result = []

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i]
        let complement = target - num

        if (numberIndex.has(complement)) {
            result[0] = numberIndex.get(complement)
            result[1] = i

            return result
        }

        numberIndex.set(num, i)
    }

    return result
}

const numericalCompare = (a, b) => {
    return a - b
}

console.log((twoSum([1, 2, 3], 4).sort(numericalCompare))) //[0, 2]
console.log((twoSum([1234, 5678, 9012], 14690).sort(numericalCompare))) //[1, 2]
console.log((twoSum([2, 2, 3], 4).sort(numericalCompare))) // [0, 1]
