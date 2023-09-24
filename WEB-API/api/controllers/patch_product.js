const Product=require('../modules/product')
const multer=require('multer');

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/products/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const productimgs= multer({storage:storage})


exports.patch_product=productimgs.single('productimg'),(req,res,next)=>{
    Product.updateOne({_id:req.params.productid},{$set :{
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        imageUrl: req.file.path,
        stockQuantity: req.body.stockQuantity,
        tags: req.body.tags,
        brand: req.body.brand,
        color: req.body.color,
        size: req.body.size,
        rating: req.body.rating,
        isFeatured: req.body.isFeatured,
        discountPercentage: req.body.discountPercentage,
        isAvailable: req.body.isAvailable,
        promotion: req.body.promotion,
        material: req.body.material,
        type: req.body.type,
        season: req.body.season
    }})
    .exec()
    .then(result =>{
        res.status(201).json(result);
    })
    .catch( err =>{
        console.log(err);
    })
}