const mongoose = require('mongoose');

const address = mongoose.Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String }
});

const Employee = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, requird: true },
    address: [ address ],
    isVerified: { type: Boolean },
    status: { type: Boolean },
    mail_id: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, required: true },
    employee_branch: { type: mongoose.Schema.Types.ObjectId, ref: 'Branch', required: true, unique: true },
    orders: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Orders', unique: true } ]
})


module.exports = mongoose.model('Employee', Employee);