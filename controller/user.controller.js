'use strict'
const axios = require('axios');
const handlerNews =  (req,res) =>{
const  Newsclass =require('../models/user.model')

let searchQ = req.query.q;
let newsURL = `https://newsapi.org/v2/everything?q=${searchQ}&apiKey=eab1af3cc80d46cdb4c839ce83f966cb`
    
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