const Product= require('../modules/product');
exports.product_get_all=(req,res,next)=>{
    Product.find()
        .select("_id name price rating updatedAt")
        .exec()
        .then(doc =>{
            res.status(200).json(doc);
        }).catch(err =>{
            console.log(err);
        })
}