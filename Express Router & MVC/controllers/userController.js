// get our User Module
const User = require('../models/user');

// make our controller folder
const user_contact_get = (req , res) =>{
    res.render('contact' , {title : "Contact Page"});
}

const user_contact_post = (req , res) => {
    
    const user = new User(req.body);
    user.save().then((result) => {
        res.redirect('/');
    }).catch((error) => {
        console.log(error);
    });
}

const user_about = (req , res) => {
    res.render('about' , {title : "About Page"});
}

const user_index = (req , res) => {
    res.render('index' , {title : "Home Page"});
}

module.exports = {
    user_contact_get,
    user_contact_post,
    user_about,
    user_index
};