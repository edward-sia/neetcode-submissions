from collections import defaultdict

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = defaultdict(int)

        for num in nums:
            freq[num] += 1

        sorted_keys = sorted(freq, key=freq.get, reverse=True)[:k]
        return sorted_keys