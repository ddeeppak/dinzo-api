const Product = require('../modules/product');

const getByCategory = (req, res, next) => {
    const category = req.params.category;
    const regex = new RegExp(category, 'i');
    Product.find({
        $or: [
            { description: regex },  
            { category: regex }
        ] 
    })
    .select("_id name price imageUrl rating updatedAt")
    .exec()
    .then(docs => {
        if (docs.length > 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).json({ message: "No products found for this category." });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: err.message }); // Respond with error message
    });
};

const search = (req, res, next) => {
    const searchWord = req.params.search;
    const regex = new RegExp(searchWord, 'i');
    
    Product.find({
        $or: [
            { name: regex }, 
            { tags: regex }, 
            { category: regex }, 
            { brand: regex }, 
            { color: regex }
        ]
    })
    .select("_id name imageUrl price rating updatedAt")
    .exec()
    .then(docs => {
        if (docs.length > 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).json({ message: "No products found matching the search criteria." });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: err });
    });
};


const getBySeason = (req, res, next) => {
    const season = req.params.season;
    const regex = new RegExp(season, 'i');
    Product.find({
        season:regex
    })
    .select("_id name price imageUrl rating updatedAt")
    .exec()
    .then(docs => {
        if (docs.length > 0) {
            res.status(200).json(docs);
        } else {
            res.status(404).json({ message: "No products found for this category." });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: err.message }); // Respond with error message
    });
};


module.exports = {
    getByCategory,
    getBySeason,
    search
};
