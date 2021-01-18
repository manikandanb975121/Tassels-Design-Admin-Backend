const express = require('express');
const router = express.Router();

// Models
const Category = require('../models/Category');


router.post('', (req, res, next) => {
    const category = new Category({
        category_name: req.body.category_name,
        category_description: req.body.category_description
    });
    category.save()
        .then(category => {
            res.status(200)
                .json({
                    message: 'Category Created Successfully',
                    result: category
                });
        });
});