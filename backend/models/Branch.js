const mongoose = require('mongoose');

const address = mongoose.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String }
});

const Branch = mongoose.Schema({
    branch_name: { type: String, required: true },
    branch_location: { type: String, required: true },
    branch_address: [ address ],
    branch_employees: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' } ],
    branch_orders: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Orders' } ],
    branch_phone_number : { type: String, required: true },
    branch_mail_id: { type: String, required: true }
})

module.exports = mongoose.model('Branch', Branch);