// use the express Frame Work
const express = require('express');

// create our middle ware : morgan
const morgan = require('morgan');

// use the mongo module
const mongoose = require('mongoose');

// use the route module
const Routes = require('./routes/routes');

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

// use our routes
app.use(Routes);

// the 404 page
app.use((req , res) => {
    res.status(404).render('404' , {title : "404 Page"});
})