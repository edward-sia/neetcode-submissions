class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let left = 0, right = numbers.length - 1

        while (left < right) {
            const total = numbers[left] + numbers[right]
            if (total === target) {
                return [left + 1, right + 1]
            } else if (total > target) {
                right--
            } else {
                left++
            }
        }
        return [-1, -1]
    }
}
