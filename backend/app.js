const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


const app = express();


const branch = require('./routes/Branch');

mongoose.connect('mongodb+srv://tassels_designs:8hdEJxybhmKQko7J@cluster0.de8qo.mongodb.net/tassels_designs?retryWrites=true&w=majority', 
                    { useNewUrlParser: true,  useUnifiedTopology: true }
    ).then(() => {
        console.log('Connected to Database!');
    })
    .catch(() => {
        console.log('Connections Failed !');
    })

    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// app.use('/iconic_image', express.static(path.join('backend/iconic_image')));
// app.use('/images', express.static(path.join('backend/images')));
// app.use('/profile_pic', express.static(path.join('backend/profile_pic')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


app.use('/api/branch', branch);


module.exports = app;