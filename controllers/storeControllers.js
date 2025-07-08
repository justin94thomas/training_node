const { fetchAllProducts } = require('../models/storeModel');

const getAllProducts = async (req, res) => {
    try {
        const product = await fetchAllProducts();
        if (!product) return res.status(404).json({ message: 'Product details not found' });
        res.json(product);
    } catch (error) {
        console.error("Error fetching product list", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAllProducts
};
