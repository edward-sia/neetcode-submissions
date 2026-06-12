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
    public int minMeetingRooms(List<Interval> intervals) {
        if (intervals == null) {
            return 0;
        }
        int N = intervals.size();
        int[] starts = new int[N];
        int[] ends = new int[N];

        for (int i = 0 ; i < N ; i++) {
            starts[i] = intervals.get(i).start;
            ends[i] = intervals.get(i).end;
        }
        Arrays.sort(starts);
        Arrays.sort(ends);

        int s = 0, e = 0, count = 0, res = 0;
        while (s < N && e < N) {
            if (starts[s] < ends[e]) {
                count++;
                s++;
            } else {
                e++;
                count--;
            }
            res = Math.max(count, res);
        }

        return res;
    }
}
