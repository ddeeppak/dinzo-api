const express= require('express');
const mongoose = require('mongoose');


const routes= express.Router();
const User= require('../modules/user');
const jwt=require('jsonwebtoken');



routes.post('/',(req,res,next)=>{
    User.findOne({email:req.body.email})
        .exec()
        .then(data =>{
            if(data){
                if(data.password===req.body.password){
                    
                    const token=jwt.sign(
                        {
                            customerid:data.customerid,
                            email:data.email
                        },
                        "5454545s5v4ds5454vsd",
                        {
                            expiresIn :'1h'
                        }
                    )
                    res.status(200).json({
                        message:"Successfully Login",
                        Token:token
                    })

            
                }
                else{
                    
                    res.status(404).json({
                        Message:"Auth Failed"
                    })
                }
            }
            else{
                res.status(404).json({
                    Message:"Auth Failed"
                })
            }
        })
        .catch(err =>{
            console.log(err);
        })
})

module.exports=routes;