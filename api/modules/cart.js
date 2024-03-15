const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  cartNumber: {
    type: mongoose.Schema.ObjectId,
    required: true,
    unique:true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    unique:true,
    required: true
  },
  items: [{
    image:String,
    category:String,
    name:String,
    product: String,
    quantity: Number,
    price: Number
  }],
  totalquantity:{
    type:Number,
    required:true
  },
  totalAmount: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Cart', cartSchema);;
