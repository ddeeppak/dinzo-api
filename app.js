const express = require('express');
const app = express(); // Fixed the typo: expess => express
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

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
app.use('/orders', order);
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
app.get('/category/:category',)


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
