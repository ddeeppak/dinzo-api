const expess= require('express');
const routes=expess.Router();
const mongoose= require('mongoose');
const multer=require('multer');
const checkout=require('../middleware/auth');


const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/products/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const productimgs= multer({storage:storage})


const get_all_product = require('../controllers/product_get_all');
const add_pro= require('../controllers/add_product');
const delete_pro= require('../controllers/delete_prodect');
const patch_pro= require('../controllers/patch_product');
const get_one=require('../controllers/get_one_product');
const product = require('../controllers/product');



routes.get('/',get_all_product.product_get_all);

routes.get('/category/:category',product.getByCategory);
routes.get('/season/:season',product.getBySeason);

routes.post('/',checkout,add_pro.add_product);


routes.get('/:productid',get_one.get_oneprodect);

routes.delete('/:productid',checkout,delete_pro.delete_product);

routes.patch('/:productid',checkout,patch_pro.patch_product)

module.exports=routes;