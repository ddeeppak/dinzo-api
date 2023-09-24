const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    customerid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        umique:true
    },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String
  },
  phoneNumber: {
    type: String,
    required:true,
    unique:true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});



module.exports = mongoose.model('User', userSchema);
