class Solution {

    private static int[][] DIRECTIONS = new int[][] {{0,1}, {0,-1}, {1,0}, {-1,0}};
    public int shortestPath(int[][] grid) {
        if (grid == null)
            return -1;

        Set<String> visited = new HashSet<>();
        Queue<int[]> queue = new ArrayDeque<>();
        int rows = grid.length;
        int cols = grid[0].length;

        queue.add(new int[] {0, 0});
        visited.add("0-0");

        int length = 0;
        while (queue.size() != 0) {
            int size = queue.size();
            for (int i = 0 ; i < size ; i++) {
                int[] curr = queue.poll();
                int currX = curr[0], currY = curr[1];

                if (currX == rows-1 && currY == cols-1) {
                    return length;
                }

                for (int[] direction : DIRECTIONS) {
                    int dirX = direction[0], dirY = direction[1];
                    if (dirX + currX >= rows ||
                        dirX + currX < 0 ||
                        dirY + currY >= cols ||
                        dirY + currY < 0 || grid[dirX + currX][dirY + currY] == 1 ||
                        visited.contains((dirX + currX) + "-" + (dirY + currY))) {
                            continue;
                        }
                    queue.add(new int[] {dirX + currX, dirY + currY});
                    visited.add((dirX + currX) + "-" + (dirY + currY));
                }
            }
            length++;
        }
        return -1;
    }
}
