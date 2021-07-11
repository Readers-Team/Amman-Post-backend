'use strict'
class Newsclass {
    constructor(item){
        this.name = item.source.name,
        this.author = item.author,
        this.title = item.title,
        this.description = item.description,
        this.urlToImage = item.urlToImage,
        this.publishedAt = item.publishedAt,
        this.content = item.content
    }
}
module.exports = Newsclass;
