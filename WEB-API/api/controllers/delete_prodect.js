const Product=require('../modules/product');

exports.delete_product=(req,res,next)=>{
    Product.deleteOne({_id:{$eq:req.params.productid}})
        .exec()
        .then(result =>{
            res.status(201).json(result);
        })
        .catch( err =>{
            console.log(err);
        })
}