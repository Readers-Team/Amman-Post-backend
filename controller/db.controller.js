'use strict'
const articalModel= require('../models/db.model');
const seeduser = require('../models/db.model')

const articaltrollerfunc=(req,res)=>{
    // let obj = seeduser();
    // res.send(obj);


    let requestedEmail=req.query.email;
    articalModel.findOne({email: requestedEmail}, function(err,userData){
        if(err){
            console.log('there is an error');
        }
            res.send(userData)
        
    });
}

const createArticalfunc=(req,res)=>{
    const{email,nameartical,description,author,title}= req.body;
    articalModel.findOne({email:email}, (error, userData)=>{
    if(error){
      res.send(error)  
    }
    userData.blogs.push({nameartical:nameartical,description:description,author:author,title:title})
    userData.save();
    res.send(userData)
    })
}

const updateBlog=(req,res)=>{
    const blogIndex = req.params.blog_id;
    const{email,nameartical,description,author,title}= req.body;
    articalModel.findOne({email:email}, (error, userData)=>{
    if(error){
      res.send(error)  
    }
    userData.blogs.splice(blogIndex, 1, {nameartical:nameartical,description:description,author:author,title:title});
    userData.save();
    res.send(userData);
        
    });
}

const deleteBlog=(req,res)=>{

    const blogIndex = req.params.blog_id;
    const{email}= req.query;

    articalModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            res.send(error)
        } 
            userData.blogs.splice(blogIndex, 1);
            userData.save();
            res.send(userData);
    });
}


module.exports={articaltrollerfunc,
    createArticalfunc,
    updateBlog,
    deleteBlog}