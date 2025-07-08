const db = require('../db/connections');


const fetchAllProducts = async () =>{
    const result = await db.query('SELECT * FROM shopping_cart.products')
    return result.rows;
}

module.exports = {
    fetchAllProducts
}