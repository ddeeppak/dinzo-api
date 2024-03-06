const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: [String],
    imageUrl: String,
    stockQuantity: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    tags: [String],
    brand: String,
    color: [String],
    size: String,
    rating: Number,
    isFeatured: Boolean,
    discountPercentage: Number,
    isAvailable: Boolean,
    promotion: String,
    material: String,
    type: String,
    imageName:String,
    season: [String],
    trending: {
        type: Boolean,
        default: false
    },
    newarrivel: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Product',productSchema);
