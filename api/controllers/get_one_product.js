const Product= require('../modules/product');

exports.get_oneprodect=(req,res,next)=>{
    Product.findOne({_id:{$eq:req.params.productid}})
        .exec()
        .then(result =>
            {
                res.status(200)
                .json(result)
            })
        .catch(err =>
            {
                console.log(err)
            })
}