class Logger {

    private final static int DELAY = 10;
    private Map<String, Integer> map;
    public Logger() {
        map = new HashMap<>();
    }
    
    public boolean shouldPrintMessage(int timestamp, String message) {
        if (map.get(message) == null || timestamp >= map.get(message)) {
            map.put(message, timestamp+DELAY);
            return true;
        }
        return false;
    }
}

/**
 * Your Logger object will be instantiated and called as such:
 * Logger obj = new Logger();
 * boolean param_1 = obj.shouldPrintMessage(timestamp,message);
 */
