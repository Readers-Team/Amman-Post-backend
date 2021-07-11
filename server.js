const express = require('express') 
const app = express() 
const cors = require('cors');
const axios = require('axios'); 
app.use(cors()) 
const handlerNews = require('./controller/user.controller')
require('dotenv').config();


// a server endpoint 
app.get('/',function (req, res) {res.send('Hello World')})

 app.get('/news', handlerNews )
 
app.listen(process.env.PORT,()=>{console.log(`listening to port: ${process.env.PORT}`);})
