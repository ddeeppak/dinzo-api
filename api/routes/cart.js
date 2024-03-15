const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();
// const Check = require('../middleware/auth');
const Cart = require('../modules/cart');
const Product = require('../modules/product');

const fashion = ['clothing','blazers','jackets','jeans','jumpsuits','shoes','footwear','sleepwear','swimwear','sportswear' ,'clothing ','shoes','shoe']

const categoryCheck = (fashion, product) => {
    for (let i in product) {
        console.log("category:",fashion,product[i])
        if (fashion.includes(product[i])) return 'fashion';
    }
    if(product.includes('accessories')) return 'accessories'
    return 'electronics';
};


routes.post('/', async (req, res, next) => {
    try {
        const { customerid } = req.userdata;
        const { productid, quantity } = req.body;
        const product = await Product.findById(productid).select("price name category imageUrl").exec();
        const amount = product.price;
        const name = product.name;
        // console.log(product);
        const cart = await Cart.findOne({ customerId: customerid }).exec();

        if (!cart) {
            const newCart = new Cart({
                cartNumber: new mongoose.Types.ObjectId(),
                customerId: customerid,
                items: [{
                    category:categoryCheck(fashion,product.category),
                    name:name,           
                    image:product.imageUrl,
                    product: productid,
                    quantity: quantity,
                    price: amount
                }],
                totalquantity: quantity,
                totalAmount: amount * quantity
            });
            await newCart.save();
            res.status(201).json(newCart);
        } else {
            const isproductincart = (productId, cartItems) => {
                return cartItems.some(item => item.product === productId);
            }
            let newitemset = cart.items;
            if (isproductincart(productid, newitemset)) {
                const index = newitemset.findIndex(item => item.product === productid);
                newitemset[index].quantity += quantity;
            } else {
                newitemset = [
                    ...newitemset,
                    {
                        category:categoryCheck(fashion,product.category),
                        name:name,
                        image:product.imageUrl,
                        product: productid,
                        quantity: quantity,
                        price: amount
                    }
                ];
            }
            
            Cart.updateOne(
                { cartNumber: cart.cartNumber },
                {
                    $set: {
                        customerId: cart.customerId,
                        items: [...newitemset],
                        totalquantity: cart.totalquantity + quantity,
                        totalAmount: cart.totalAmount + quantity * amount
                    }
                }
            )
            .exec()
            .then(result => {
                res.status(201).json(result);
            })
            .catch(err => {
                console.log(err);
            });
            
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

routes.get('/',(req,res,next) => {
        try{
            const {customerid} = req.userdata;
            const card = Cart.findOne({customerId:customerid})
                            .exec()
                            .then(data=>{
                                if(data) res.status(200).json(data);
                                else res.status(200).json({message:"Cart not found"})
                            })
                            .catch( err =>{
                                console.log(err);
                            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
})
routes.delete('/:productcode', async (req, res, next) => {
    try {
        const { customerid } = req.userdata;
        const productcode = req.params.productcode;
        
        const cart = await Cart.findOne({ customerId: customerid }).exec();

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const index = cart.items.findIndex(item => item.product === productcode);
        if (index === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        cart.items.splice(index, 1);
        cart.totalquantity = cart.items.reduce((total, item) => total + item.quantity, 0);
        cart.totalAmount = cart.items.reduce((total, item) => total + (item.quantity * item.price), 0);

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
routes.patch('/:productcode', async (req, res, next) => {
    try {
        const { customerid } = req.userdata;
        const productcode = req.params.productcode;
        const { quantity } = req.body;
        
        const cart = await Cart.findOne({ customerId: customerid }).exec();

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const index = cart.items.findIndex(item => item.product === productcode);
        if (index === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        const product = await Product.findById(productcode).exec();
        const amount = product.price;
        cart.items[index].quantity = quantity;
        cart.totalquantity = cart.items.reduce((total, item) => total + item.quantity, 0);
        cart.totalAmount = cart.items.reduce((total, item) => total + (item.quantity * item.price), 0);

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = routes;
