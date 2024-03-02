const Order= require('../modules/order');
const mongoose = require('mongoose');
const jwt= require('jsonwebtoken');


exports.add_order=(req,res,next)=>{
    const order = new Order({
        orderNumber:new mongoose.Types.ObjectId(),
        customerId:req.userdata.customerid,
        totalAmount:req.body.totalAmount,
        totalquantity:req.body.totalquantity
    });
    order.save()
        .then(result =>{
            res.status(201).json(result);
        })
        .catch (err =>{
            console.log(err);
        })
}