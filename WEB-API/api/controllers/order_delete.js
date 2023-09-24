const Order= require('../modules/order');


exports.delete_order=(req,res,next)=>{
    Order.deleteOne({_id:req.params.orderid})
        .exec()
        .then(result =>{
            res.status(201)
            .json(result);
        })
        .catch(err =>{
            console.log(err);
        })
}