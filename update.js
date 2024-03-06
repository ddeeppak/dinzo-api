const fs = require('fs');
const mongoose = require('mongoose');
const Product = require('./api/modules/product');

const jsonpath = './output.json';

mongoose.connect('mongodb+srv://p2003deepak:ZaTUZd5Spdg8xu5w@webdata.ochtczt.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

fs.readFile(jsonpath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const products = JSON.parse(data);

    for (const productData of products) {
      try {
        const existingProduct = await Product.findOne({ imageName: productData.name });

        if (existingProduct) {
          // If the product with the given name exists, update its imageUrl
          existingProduct.imageUrl = productData.url;
          await existingProduct.save();
          console.log("Product Updated: ", existingProduct.name);
        } else {
          console.log("No Product Found for image:", productData.name);
        }
      } catch (error) {
        console.error('Error processing product:', error);
      }
    }

    const totalProductsInDatabase = await Product.countDocuments();
    console.log('Total products updated in database:', totalProductsInDatabase);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
