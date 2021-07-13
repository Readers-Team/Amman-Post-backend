'use strict'
const axios = require('axios');
const handlerNews =  (req,res) =>{
const  Newsclass =require('../models/user.model')

let searchQ = req.query.q;
let newsURL = `https://newsapi.org/v2/everything?q=${searchQ}&apiKey=2c9673f9551b4c5687cf9d3ed5663b8b`
    
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