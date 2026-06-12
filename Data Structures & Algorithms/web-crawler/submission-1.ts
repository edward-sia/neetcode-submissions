/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

class Solution {

    // url should we remove the hash # part?
    // what if the URL is incorrect? contains space, email, etc

    cleanUrl(url: string): string {
        return url.split('#')[0]
    }

    tryParseUrl(url: string): URL | null {
        try {
            return new URL(url)
        } catch (error) {
            return null
        }
    }

    /**
     * @param {string} startUrl
     * @param {HtmlParser} htmlParser
     * @return {string[]}
     */
    crawl(startUrl: string, htmlParser: HtmlParser): string[] {
        
        const startUrlStr = this.cleanUrl(startUrl);
        const visited = new Set([startUrlStr])
        const visiting = [startUrlStr]
        const startHostname = new URL(startUrl).hostname

        while (visiting.length > 0) {
            const nextUrl = visiting.pop();
            const childUrls = htmlParser.getUrls(nextUrl);
            for (const childUrl of childUrls) {
                const parsedUrl = this.tryParseUrl(childUrl)
                const cleanUrl = this.cleanUrl(childUrl)
                if (!parsedUrl || parsedUrl.hostname !== startHostname) continue;
                if (!cleanUrl.startsWith('http')) continue;
                if (visited.has(cleanUrl)) continue;
                visiting.push(cleanUrl);
                visited.add(cleanUrl);
            }
        }
        return [...visited];
    }
}
