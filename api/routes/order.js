const expess= require('express');
const routes=expess.Router();
const checkauth= require('../middleware/auth');

const add_order= require('../controllers/order_add');
const get_all= require('../controllers/order_get_all');
const delete_order= require('../controllers/order_delete');
const patch_order= require('../controllers/order_patch');
const get_order=require('../controllers/order_get');

routes.get('/',checkauth,get_all.get_all_order);

routes.post('/',checkauth,add_order.add_order);

routes.get('/:orderid',checkauth,get_order.get_order);

routes.delete('/:orderid',checkauth,delete_order.delete_order);

routes.patch('/:orderid',checkauth,patch_order.patch_order);

module.exports=routes;