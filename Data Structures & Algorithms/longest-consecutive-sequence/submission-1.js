class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length <= 1) return nums.length
        const sortedNums = [...nums].sort((a, b) => a - b)

        let longest = 0;
        let i = 1;
        while (i < nums.length) {
            let curr = 0;
            while (sortedNums[i-1] == sortedNums[i]-1 ||
                sortedNums[i-1] == sortedNums[i]) {
                if (sortedNums[i-1] != sortedNums[i]) 
                    curr++
                i++
            }
            // console.log('longest ' + curr)
            longest = Math.max(curr, longest)
            i++
        }
        return longest+1;
    }
}
