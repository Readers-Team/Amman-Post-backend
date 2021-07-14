'use strict'
const axios = require('axios');
const handlerNews =  (req,res) =>{
const  Newsclass =require('../models/user.model')

let searchQ = req.query.q;
let apiKey=process.env.REACT_APP_URL_API
let newsURL = `https://newsapi.org/v2/everything?q=${searchQ}&apiKey=${apiKey}`
    
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
