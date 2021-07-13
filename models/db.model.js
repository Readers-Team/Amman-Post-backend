'use strict'
const mongoose = require('mongoose');

const DatalSchema = new mongoose.Schema({
    nameartical: { type: String },
    description: { type: String },
    author: { type: String },
    title: { type: String }
})

const artical = new mongoose.Schema({
    email: { type: String },
    blogs: [DatalSchema]
})


const articalModel = mongoose.model('community', artical)

//seeding
const seedUser = () => {
    let osama = new articalModel({
        email: 'momaniosama97@gmail.com',
        blogs: [{ nameartical: 'sport', description: 'book told you to climb to heigh elo in leage of legends as an adc roe', author: 'gaming book', title: 'copa amireca' },
        { nameartical: 'War and Peace', description: 'A legendary masterpiece, this book is synonymous with difficult reading, so why not challenge yourshelf', author: 'philosophical book', title: 'erou' }]

    })


    osama.save();
    console.log(osama.email);
}

module.exports = articalModel

//   seedUser();
