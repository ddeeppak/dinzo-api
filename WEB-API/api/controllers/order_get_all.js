const Order= require('../modules/order');
const jwt = require('jsonwebtoken');

exports.get_all_order=(req,res,next)=>{
    Order.find({customerId:req.userdata.customerid})
        .select('orderNumber totalquantity totalamount status')
        .exec()
        .then(result =>{
            res.status(200)
            .json(result);
        })
        .catch(err =>{
            console.log(err);
        })
    
}