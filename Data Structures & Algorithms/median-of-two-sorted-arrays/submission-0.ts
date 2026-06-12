class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const joined = [...nums1, ...nums2].sort((a, b) => a - b)

        const nm = joined.length
        return nm % 2 == 0 ? (joined[nm/2 - 1] + joined[nm/2]) / 2 : 
            joined[(nm-1)/2]
    }
}
