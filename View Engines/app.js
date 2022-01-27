// use the express Frame Work
const express = require('express');

// initialize express app
const app = express();

// use the View Engines
app.set('view engine' , 'ejs');

// listen to request
app.listen(3000);

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

// the 404 page
app.use((req , res) => {
    res.status(404).render('404' , {title : "404 Page"});
})