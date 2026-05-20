class Solution {
    public String minWindow(String s, String t) {
        Map<Character, Integer> tCount = new HashMap<>();
        Map<Character, Integer> sCount = new HashMap<>();

        for (char c : t.toCharArray()) {
            tCount.put(c, tCount.getOrDefault(c, 0) + 1);
        }

        int l = 0, count = 0;
        int[] win = new int[] {-1, -1};
        int min = Integer.MAX_VALUE;
        for (int r = 0 ; r < s.length() ; r++) {
            char c = s.charAt(r);
            sCount.put(c, sCount.getOrDefault(c, 0) + 1);
            if (tCount.containsKey(c) && sCount.get(c) == tCount.get(c)) {
                count++;
            }
            
            while (count == tCount.size()) {
                // do something with length;
                if ((r - l + 1) < min) {
                    min = r - l + 1;
                    win[0] = l;
                    win[1] = r;
                }
                
                char lC = s.charAt(l);
                sCount.put(lC, sCount.get(lC) - 1);

                if (tCount.containsKey(lC) && sCount.get(lC) < tCount.get(lC)) {
                    count--;
                }
                l++;
            }
        }

        return min == Integer.MAX_VALUE ? "" : s.substring(win[0], win[1]+1);
    }
}
