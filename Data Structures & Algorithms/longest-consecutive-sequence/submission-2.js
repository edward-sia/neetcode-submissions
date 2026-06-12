class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const res = new Set(nums)
        let longest = 0;

        for (let i = 0 ; i < nums.length ; i++) {
            if (!res.has(nums[i] - 1)) { // if num[i]-1 exist
                let length = 1;
                while (res.has(nums[i] + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
        // if (nums.length <= 1) return nums.length
        // const sortedNums = [...nums].sort((a, b) => a - b)

        // let longest = 0;
        // let i = 1;
        // while (i < nums.length) {
        //     let curr = 0;
        //     while (sortedNums[i-1] == sortedNums[i]-1 ||
        //         sortedNums[i-1] == sortedNums[i]) {
        //         if (sortedNums[i-1] != sortedNums[i]) 
        //             curr++
        //         i++
        //     }
        //     // console.log('longest ' + curr)
        //     longest = Math.max(curr, longest)
        //     i++
        // }
        // return longest+1;
    }
}
