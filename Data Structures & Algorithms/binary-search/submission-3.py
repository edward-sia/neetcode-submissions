class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums) - 1

        while l <= r :
            i = (l + r) // 2
            # print(i)
            if target == nums[i]:
                return i
            if target < nums[i]:
                r = i-1
            elif target > nums[i]:
                l = i+1

        return -1


        