// use the express Frame Work
const express = require('express');

// initialize express app
const app = express();

// listen to request
app.listen(3000);

// managing our routes
app.get('/' , (req ,res) => {
    res.sendFile('./views/index.html' , {root : __dirname});
});

app.get('/about' , (req ,res) => {
    res.sendFile('./views/about.html' , {root : __dirname});
});

// the 404 page
app.use((req , res) => {
    res.status(404).res.sendFile('./views/404.html' , {root : __dirname});
})