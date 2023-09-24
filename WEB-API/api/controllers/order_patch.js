const Order= require('../modules/order');


exports.patch_order=(req,res,next)=>{
    Order.updateMany({_id:req.params.orderid}, {$set :{status:'delivered'}})
        .exec()
        .then(result =>{
            res.status(201)
            .json(result);
        })
        .catch(err =>{
            console.log(err);
        })
}