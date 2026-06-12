# """
# This is HtmlParser's API interface.
# You should not implement it, or speculate about its implementation
# """
#class HtmlParser(object):
#    def getUrls(self, url):
#        """
#        :type url: str
#        :rtype List[str]
#        """
from urllib.parse import urlparse, ParseResult
from collections import deque

class Solution:

    def sameHostname(self, baseHostname: str, url: str) -> bool:
        return baseHostname == urlparse(url).hostname

    def cleanUrl(self, url: str) -> str:
        return url.split("#")[0]

    def crawl(self, startUrl: str, htmlParser: 'HtmlParser') -> List[str]:
        firstUrl = self.cleanUrl(startUrl)
        visited = {firstUrl}
        queue = deque([firstUrl])
        startHostname = urlparse(startUrl).hostname

        while queue:
            nextUrl = queue.popleft()
            childUrls = htmlParser.getUrls(nextUrl)

            for childUrl in childUrls:
                if not self.sameHostname(startHostname, childUrl):
                    continue
                cleanUrl = self.cleanUrl(childUrl)
                if cleanUrl in visited:
                    continue

                queue.append(cleanUrl)
                visited.add(cleanUrl)
        
        return list(visited)
