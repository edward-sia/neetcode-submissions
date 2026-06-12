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
    public boolean canAttendMeetings(List<Interval> intervals) {
        if (intervals == null || intervals.size() == 0) {
            return true;
        }
        // for (Interval in : intervals) {
        //     System.out.println(in.start + " ::: " + in.end);
        // }
        Comparator<Interval> byStart = Comparator.<Interval>comparingInt(n -> n.start);
        List<Interval> sorted = intervals.stream().sorted(byStart).collect(Collectors.toList());

        for (int i = 1 ; i < sorted.size() ; i++) {
            Interval prev = sorted.get(i-1);
            Interval curr = sorted.get(i);

            if (prev.end > curr.start) {
                return false;
            }
        }

        return true;
    }
}
