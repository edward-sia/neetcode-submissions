
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface HtmlParser {
 *     public List<String> getUrls(String url) {}
 * }
 */

class Solution {

    public List<String> crawl(String startUrl, HtmlParser htmlParser) {
        Set<String> visited = new HashSet<>();
        ArrayDeque<String> q = new ArrayDeque<>();
        String base = getHostname(startUrl);

        q.addLast(startUrl);
        while (q.size() > 0) {
            String curr = q.pollFirst();
            if (visited.contains(curr) || !sameHostname(base, curr)) {
                continue;
            }
            List<String> children = htmlParser.getUrls(curr);
            q.addAll(children);
            visited.add(curr);
        }

        return new ArrayList<>(visited);
    }

    private boolean sameHostname(String base, String url) {
        return base.equals(getHostname(url));
    }

    private String getHostname(String url) {
        // split url by slashes
        // for instance, "http://example.org/foo/bar" will be split into
        // "http:", "", "example.org", "foo", "bar"
        // the hostname is the 2-nd (0-indexed) element
        return url.split("/")[2];
    }
}
