class Tweet {
    userId: number
    id: number

    constructor(id, userId) {
        this.id = id
        this.userId = userId
    }
}

class Twitter {
    constructor() {}

    users = new Map<number, Tweet[]>
    following = new Map<number, Set<number>>
    tweets: Tweet[] = []
    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        if (!this.users.has(userId)) {
            this.users.set(userId, [])
        }
        let tw = new Tweet(tweetId, userId)
        this.tweets.push(tw)
        this.users.get(userId).push(tw)
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        let followings = new Set(this.following.get(userId))
        
        let list = this.tweets
            .filter(t => followings.has(t.userId) || t.userId === userId)
            .map(t => t.id)
            .reverse()
            .slice(0, 10)
        return list
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set())
        }
        this.following.get(followerId).add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        if (!this.following.has(followerId)) {
            this.following.set(followerId, new Set())
        }
        this.following.get(followerId).delete(followeeId)
    }
}
