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
        if (intervals == null || intervals.size() < 2) {
            return true;
        }
        // for (Interval in : intervals) {
        //     System.out.println(in.start + " ::: " + in.end);
        // }
        Comparator<Interval> byStart = Comparator.<Interval>comparingInt(n -> n.start);
        List<Interval> sorted = intervals.stream().sorted(byStart).collect(Collectors.toList());

        Interval prev = sorted.get(0);
        for (int i = 1 ; i < sorted.size() ; i++) {
            if (prev.end > sorted.get(i).start) {
                return false;
            }
            prev = sorted.get(i);
        }

        return true;
    }
}
