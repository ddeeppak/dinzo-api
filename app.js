const express = require('express');
const app = express(); // Fixed the typo: expess => express
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');




const stripe = require('stripe')('sk_test_51Ofd8ZSHG3VMe4sjt6uJwfexitLR3vMuinRgfQZmd1Od4B8eJoCyolqzRpvOEIyF45de9FN5ZPgAmZUSc8W578O1007O1IUV4H');

stripe.customers.create({
  email: 'customer@example.com',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));

// Handling CORS headers'
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST, GET, PATCH, DELETE'); // Fixed typo: res.status(200).json({}); => res.status(200).send({});
        return res.status(200).send({});
    }
    next();
});

// Routes imports
const order = require('./api/routes/order');
const products = require('./api/routes/product');
const signin = require('./api/routes/sign');
const login = require('./api/routes/login');
const cart = require('./api/routes/cart');
const CheckPoint = require('./api/middleware/auth')
const Cart = require('./api/modules/cart');



// Database connection
mongoose.connect('mongodb+srv://p2003deepak:ZaTUZd5Spdg8xu5w@webdata.ochtczt.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Product = require('./api/modules/product'); 
const {search} = require('./api/controllers/product');

app.use('/uploads', express.static('uploads'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/product', products);
app.use('/orders',CheckPoint, order);
app.use('/cart',CheckPoint,cart);
app.use('/signin', signin);
app.use('/login', login);
app.get('/search/:search',search);
app.get('/trendingproducts', async (req, res) => {
    try {
        const trendingProducts = await Product.find({ trending: true })
            .select("_id name price rating updatedAt imageUrl")
            .exec();
        res.status(200).json(trendingProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/newproducts', async (req, res) => {
    try {
        const trendingProducts = await Product.find({ newarrivel: true })
            .select("_id name price rating updatedAt imageUrl")
            .exec();
        res.status(200).json(trendingProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get('/category/:category',)

const productpay = {
    name:"Lymio Men Jeans",
    imageUrl:"https://dinzo.s3.ap-south-1.amazonaws.com/1j.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXYKJSWKAU5G7XACB%2F20240310%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240310T013218Z&X-Amz-Expires=3600&X-Amz-Signature=07b44f0bdac840da5f7239d27780495bd3b62d97409458d42eec511d341d1f46&X-Amz-SignedHeaders=host",
    price:500,
    quantity:1
}

app.post('/create-checkout-session', CheckPoint, async (req, res, next) => {
    const { customerid } = req.userdata;
    const cart = await Cart.findOne({ customerId: customerid }).exec();

    const lineItems = cart.items.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.name,
                images: [item.imageUrl] // Assuming item.image holds the image URL
            },
            unit_amount: Math.round(item.price), // Stripe expects amount in cents
        },
        quantity: item.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'https://yourwebsite.com/success', // Redirect URL after successful payment
        cancel_url: 'https://yourwebsite.com/cancel', // Redirect URL after canceled payment
    });

    res.status(200).json({ id: session.id });
});



// Error handling middleware

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
});

module.exports = app;
