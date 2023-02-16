const express = require('express');
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path');
const adminData = require('./admin');




router.get('/', (req, res, next) => {
    // console.log('shop.js',adminData.products);
    // res.sendFile(path.join(rootDir,"views","shop.html"));
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: "Home: Shop",
        path: "/",
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });

})

module.exports = router;