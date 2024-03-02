const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: mongoose.Schema.ObjectId,
    required: true,
    unique:true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  items: [{
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
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending'
  }
});

module.exports = mongoose.model('Order', orderSchema);;
