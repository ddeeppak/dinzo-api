const fs = require('fs');
const AWS = require('aws-sdk');
const mongoose = require('mongoose');
const Product = require('./api/modules/product');

const jsonpath = './data.json';

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
          const imageUrl = productData.imageUrl;
          const product = new Product({
          _id: new mongoose.Types.ObjectId(),
          name: productData.name,
          price: productData.price,
          description: productData.description,
          category: productData.category,
          imageUrl: productData.imageUrl,
          imageName: productData.imageUrl,
          stockQuantity: productData.stockQuantity,
          tags: productData.tags,
          brand: productData.brand,
          color: productData.color,
          size: productData.size,
          rating: productData.rating,
          isFeatured: productData.isFeatured,
          discountPercentage: productData.discountPercentage,
          isAvailable: productData.isAvailable,
          promotion: productData.promotion,
          material: productData.material,
          type: productData.type,
          season: productData.season,
          trending: productData.trending,
          newarrivel: productData.newarrivel
        });
        console.log("Product Saved : ",product.name);
        await product.save();


      } catch (error) {
        console.error('Error saving product:', error);
      }
    }
    // await Product.deleteMany({});
    const totalProductsInDatabase = await Product.countDocuments();
    console.log('Total products saved in database:', totalProductsInDatabase);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
