'use strict'
const axios = require('axios');
const handlerNews =  (req,res) =>{
const  Newsclass =require('../models/user.model')

let searchQ = req.query.q;
let newsURL = `https://newsapi.org/v2/everything?q=${searchQ}&apiKey=d34bef2baed3430aafd7b8dd320c3ac8`
    
axios
   .get(newsURL)
   .then((result) =>{
       
    let getdata = result.data.articles.map(item=>{
     return new Newsclass (item);
                                                 }) 
     res.send(getdata);
                    })
                }
module.exports = handlerNews