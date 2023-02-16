const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product',{pageTitle: 'Add Product', path: '/admin/add-product'})
})

router.post('/add-product', (req, res, next) => {
    // console.log(req.body.title);
    // console.log(products);
    products.push({ title: req.body.title });
    // console.log(products);
    res.redirect('/');
})


exports.routes = router;
exports.products = products;