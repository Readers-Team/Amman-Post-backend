const express = require('express') 
const app = express() 
const cors = require('cors');
const axios = require('axios'); 
const mongoose=require('mongoose');
// const jwt=require('jsonwebtoken');
// const jwksClient=require('jwks-rsa');
const articalModel= require('./models/db.model');
app.use(cors()) 
const handlerNews = require('./controller/user.controller')
require('dotenv').config();
const {articaltrollerfunc,
    createArticalfunc,
    updateBlog,
    deleteBlog}= require('./controller/db.controller');

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/community',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// a server endpoint 
app.get('/',function (req, res) {res.send('Hello World')})

 app.get('/news', handlerNews )

 app.get('/blogs',articaltrollerfunc);
 app.post('/blogs',createArticalfunc);
 app.put('/blogs/:blog_id',updateBlog);
 app.delete('/blogs/:blog_id',deleteBlog);

 //========================================================================

 app.get('/allblogs',(req,res)=>
 {articalModel.find({ },(error, user)=>
 {if (error){res.send(error.message)}
 res.send(user);  
 });})

// ============================================Varfication Autho==============================================//

//  const client = jwksClient({
   
//     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
//   });


// const getKey=(header, callback)=>{
//     client.getSigningKey(header.kid, function(err, key) {
//         const signingKey = key.publicKey || key.rsaPublicKey;
//         callback(null, signingKey);
//       });
// }

// app.get('/authorize',(req,res)=>{
//     const token=req.headers.authorization.split(' ')[1];
//     jwt.verify(token,getKey,{},(err,user)=>{
//         if(err){
//             res.send('invalid token');
//         }
//         res.send(user)
//     })
//     res.send(token);
// });

 // =====================================Varfication Autho===================================//
app.listen(process.env.PORT,()=>{console.log(`listening to port: ${process.env.PORT}`);})
