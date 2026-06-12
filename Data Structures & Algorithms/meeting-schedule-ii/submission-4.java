/**
 * Definition of Interval:
 * public class Interval {
 *     public int start, end;
 *     public Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

class Solution {
    // 2 pointers solution
    //  sort the starts and ends separately
    //  while s < N 
    //    if starts[s] < ends[e] 
    //       s++ and count++ // require a new room
    //    else e++ and count--  // room freed
    //    keeping track of ongoing meeting required - count
    //    
    // public int minMeetingRooms(List<Interval> intervals) {
    //     if (intervals == null) {
    //         return 0;
    //     }
    //     int N = intervals.size();
    //     int[] starts = new int[N];
    //     int[] ends = new int[N];

    //     for (int i = 0 ; i < N ; i++) {
    //         starts[i] = intervals.get(i).start;
    //         ends[i] = intervals.get(i).end;
    //     }
    //     Arrays.sort(starts);
    //     Arrays.sort(ends);

    //     int s = 0, e = 0, count = 0, res = 0;
    //     while (s < N && e < N) {
    //         if (starts[s] < ends[e]) {
    //             count++;
    //             s++;
    //         } else {
    //             e++;
    //             count--;
    //         }
    //         res = Math.max(count, res);
    //     }

    //     return res;
    // }

    // minHeap approach
    public int minMeetingRooms(List<Interval> intervals) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        intervals.sort((a, b) -> a.start - b.start);
        for (Interval node: intervals) {
            if (minHeap.size() == 0) {
                minHeap.offer(node.end);
            } else if (node.start < minHeap.peek()) {
                minHeap.offer(node.end); // overlap, so need new meeting room
            } else { // the new meeting is not overlap with minHeap end
                minHeap.poll(); // meeting ends
                minHeap.offer(node.end); // new meeting (end) added
            }
        }
        return minHeap.size();
    }
}
