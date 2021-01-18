const express = require('express');
const router = express.Router();


// Models
const Branch = require('../models/Branch');

router.post('', (req, res, next) => {

    console.log(req.body);

    const branch = new Branch({

        branch_name: req.body.branch_name,
        branch_location: req.body.branch_location,
        branch_address: req.body.branch_address,
        branch_employees: req.body.branch_employees,
        branch_orders: req.body.branch_orders,
        branch_phone_number : req.body.branch_phone_number,
        branch_mail_id: req.body.branch_mail_id

    });

    branch.save()
        .then((branch) => {
            res.status(200)
                .json({
                    message: 'Branch created Successfully',
                    result: branch
                });
        });
});


router.get('', (req, res, next) => {

    Branch.find()
        .then(branch => {
            res.status(200)
                .json({
                    message: 'Branches Fetched Successfully',
                    result: branch
                });
        });

});


router.get('/:id', (req, res, next) => {
    Branch.findById(req.params.id)
        .then(branch => {
            res.status(200)
                .json({
                    message: 'Branch Details Fetched Successfully',
                    result: branch
                })
        });
});


router.post('/:id', (req, res, next) => {
    Branch.findByIdAndUpdate(req.params.id, req.body)
        .then(branch => {
            res.status(200)
                .json({
                    message: 'Branch Updated Successfully',
                    result: branch
                })
        })
});


module.exports = router;