// use the express Frame Work
const express = require('express');

// create our middle ware : morgan
const morgan = require('morgan');

// get our User Module
const User = require('./models/user');

// use the mongo module
const mongoose = require('mongoose');

// connect to the database
const dbUrl = 'mongodb://localhost:27017/NATURE';
mongoose.connect(dbUrl , {useNewUrlParser : true , useUnifiedTopology : true}).then((result) =>{
    console.log('Connect to db');
    // listen to request
    app.listen(3000);
}).catch((error) => {
    console.log("Error : ",error);
})

// initialize express app
const app = express();

// use the View Engines
app.set('view engine' , 'ejs');

// use our morgan middle ware wtih static file
app.use(express.static('static'));
app.use(express.urlencoded({extended : true}));
app.use(morgan('dev'));

// try our user module
app.get('/test' , (req, res) => {
    const user = new User({
        username : 'Hamza',
        password : 'Admin@1234'
    });
    user.save().then((result) => {
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    });
});

// managing our routes
app.get('/' , (req ,res) => {
    res.render('index' , {title : "Home Page"});
});

app.get('/about' , (req ,res) => {
    res.render('about' , {title : "About Page"});
});

app.get('/contact' , (req ,res) => {
    res.render('contact' , {title : "Contact Page"});
});

// this is a route to the POST method
app.post('/contact' , (req ,res) => {
    const user = new User(req.body);
    user.save().then((result) => {
        res.redirect('/');
    }).catch((error) => {
        console.log(error);
    });
})

// the 404 page
app.use((req , res) => {
    res.status(404).render('404' , {title : "404 Page"});
})