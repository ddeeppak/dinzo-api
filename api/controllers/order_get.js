const Order= require('../modules/order');


exports.get_order=(req,res,next)=>{
    Order.findOne({_id:req.params.orderid})
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err)
    })
}